import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';


@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService){}

  async register(createAuthDto:CreateAuthDto){
    const user = await this.prisma.user.create({
      data: {
        name: createAuthDto.name,
        password: createAuthDto.password,
        role: "['admin']"
      }
    })
    delete user.password
    return user
  }

 async login(loginDto: LoginDto){
    const user = await this.prisma.user.findUnique({
      where: {
        name: loginDto.name
      }
    })
    return user
 }

}
