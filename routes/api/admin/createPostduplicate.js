const db = require('../../../db')


//I can't mix net and output style of error handling.  how would I change it so that I can 
//use my middleware (I want to to this for my catch, to have a default 500 error response) 
//but then I want to be able to have an array of errors when other values are missing such as my postTitle, postContent, etc.

module.exports = async (req, res, next) => {

    try{
        const { userId='a9ec5c8d-455a-11ea-8fd0-a4db300c2566', post} = req.body;
        const { postType='standard', contentType='philosophy', postTitle, postContent, postQuote } = post;
        //later will have postType and contentType set to default to null; currently set to these value while features sets are being built out

        let output = {
            code: 422,
            errors: [],
            message: "Invalid POST Request"
        }
        if(!userId){
            var error = new ApiError(404, 'Specified userId not found');
            //push to errors, then later return next
            // next(error);
            // output.errors.push('userId missing');
        }
        //add additional data verification and checking, to make sure there are no quotes around id, make sure correct number format, etc==> 422 invalid id recieved
        if(!postTitle){
            var error = new ApiError(404, 'Specified userId not found');
            // next(error);
            // output.errors.push('Post missing title');
        };
        if(!postContent){
            output.errors.push('Post missing content');
        };
        if(!postQuote){
            output.errors.push('Post missing quote');
        };
        if ( !postType || postType !== 'standard' && postType !== 'recipe'){
            output.errors.push('Invalid post type recieved');
        }
        //no check for content type because will later build out so that can add content types    
        const[[trueUserId = null]] = await db.execute(`SELECT id from userAuth where pid=?`, [userId]);
        if(!trueUserId){
            var error = new ApiError(404, 'Specified userId not found');
            next(error);
            return;
        } 
        if (output.errors.length) {
            res.status(output.code).send(output);
            return;
        }
        
        if( postTitle && postContent && postQuote){
            await db.execute(`
            INSERT INTO posts 
                (pid, userId, postType, contentType, postTitle, postContent, postQuote)
                VALUES (UUID(), ?, ?, ?, ?, ?, ?)`,
                [trueUserId.id, postType, contentType, postTitle, postContent, postQuote]);
            output.code = 200;
            delete output.errors;
            output.message = "POST request successful"
            res.send(output);
        }
    }
    catch(error){{
        next(error);
    }

    }
    
    

};