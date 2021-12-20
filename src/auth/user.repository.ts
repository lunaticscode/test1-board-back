import {EntityRepository, Repository} from "typeorm";
import {User} from "./user.entity";
import {AuthCredentialDto} from "./dto/auth-credential.dto";
import {ConflictException, InternalServerErrorException} from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async createUser(authCredentialDto: AuthCredentialDto):Promise<any>{
        const {email, password} = authCredentialDto;
        const user = this.create({email, password});
        try{
            await this.save(user);
        }catch(e){
            console.log(e);
            if(e.code === "23505"){
                throw new ConflictException("This email is already existing.");
            }else{
                throw new InternalServerErrorException();
            }
        }
    }
}