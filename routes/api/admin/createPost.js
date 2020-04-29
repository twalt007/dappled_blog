const db = require('../../../db')

module.exports = async (req, res) => {

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
            output.errors.push('userId missing');
        }
        //add additional data verification and checking, to make sure there are no quotes around id, make sure correct number format, etc==> 422 invalid id recieved
        const[[trueUserId= null]] = await db.execute(`SELECT id from userAuth where pid=?`, [userId]);
        //belo error checking for trueUserId doesn't work.  need to find another way to check.  end up getting 500 error
        if(!trueUserId){
            output.code = 404;
            output.errors.push('Specified userId not found');
            return;
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
        if ( !postType || postType !== 'standard' && postType !== 'recipe'){
            output.errors.push('Invalid post type recieved');
        }
        //no check for content type because will later build out so that can add content types     
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
    catch(error){
        console.log("error: ", error);
        res.status(500).send("Server error");
    }
};