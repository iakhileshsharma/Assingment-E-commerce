import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserSignUpDto } from './dto/user-signup.dto';
import { UserEntity } from './entities/user.entity';
import { UserSignInDto } from './dto/user-signin.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    signup(userSignUpDto: UserSignUpDto): Promise<UserEntity>;
    signin(userSignInDto: UserSignInDto): Promise<{
        accessToken: string;
        user: UserEntity;
    }>;
    findAll(): Promise<UserEntity[]>;
    findOne(id: string): Promise<UserEntity>;
    getProfile(currentUser: UserEntity): UserEntity;
    create(createUserDto: CreateUserDto): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
