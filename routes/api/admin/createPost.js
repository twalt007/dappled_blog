const db = require('../../../db')

module.exports = async (req, res) => {

    try{
        const { userId, postType='standard', contentType='philosophy', postTitle, postContent, postQuote } = req.body;
        //later will have postType and contentType set to default to null; currently set to these value while features sets are being built out

        let output = {
            code: 422,
            errors: [],
            message: "Invalid POST Request"
        }
        if(!userId){
            output.errors.push('userId missing');
        }
        if(!postTitle){
            output.errors.push('Post missing title');
        };
        if(!postContent){
            output.errors.push('Post missing content');
        };
        if(!postQuote){
            output.errors.push('Post missing quote');
        };
        // if ( !postType || postType !== 'standard' || postType !== 'recipe'){
        //     output.errors.push('Invalid post type recieved');
        // }
        //no check for content type because will later build out so that can add content types    
        if (output.errors.length) {
            res.status(output.code).send(output);
            return;
        }

        if( postTitle && postContent && postQuote){
            output.code = 200;
            delete output.errors;
            output.message = "POST request successful"

            await db.execute(`
            INSERT INTO posts 
                (pid, userId, postType, contentType, postTitle, postContent, postQuote)
                VALUES (UUID(), ?, ?, ?, ?, ?, ?)`,
                [userId, postType, contentType, postTitle, postContent, postQuote]);
            res.send(output);
        }
    }
    catch(error){{
        console.log("error", error);
    }

    }
    
    

};