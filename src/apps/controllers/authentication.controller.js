const authenService = AuthenticationService;
class AuthenticationController {
    async login(req,res){
        const user = {...req.body};
        try{const ret = await authenService.login(user);
        
        delete ret.password;

        req.session.email = user.email;
        req.session.role = ret.role;

        if(req.session.viewCount){
            req.session.viewCount++;
        }else{
            req.session.viewCount =1;
        }
        
        
        
        }
    }
};
