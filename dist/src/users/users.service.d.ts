import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserSignUpDto } from './dto/user-signup.dto';
import { UserSignInDto } from './dto/user-signin.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    signup(userSignUpDto: UserSignUpDto): Promise<UserEntity>;
    signin(userSignInDto: UserSignInDto): Promise<UserEntity>;
    findOne(id: number): Promise<UserEntity>;
    create(createUserDto: CreateUserDto): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
    findUserByEmail(email: string): Promise<UserEntity>;
    accessToken(user: UserEntity): Promise<string>;
    findAll(): Promise<UserEntity[]>;
}
