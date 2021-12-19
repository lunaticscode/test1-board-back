import {EntityRepository, Repository} from "typeorm";
import {User} from "./user.entity";
import {AuthCredentialDto} from "./dto/auth-credential.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async createUser(authCredentialDto: AuthCredentialDto):Promise<any>{
        const {email, password} = authCredentialDto;
        const user = this.create({email, password});
        await this.save(user);
    }
}