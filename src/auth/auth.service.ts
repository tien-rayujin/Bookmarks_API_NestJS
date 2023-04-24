import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDto) {
    // generate the password hash
    const hash = await argon.hash(dto.password);
    try {
      // save the new user to the database
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });
      // remove the hashed password from the user object
      delete user.hash;

      // return the saved user
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      console.log(error);
      throw error;
    }
  }

  async signin(dto: AuthDto) {
    // find the user of the email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    // if user does not exist, throw exception
    if (!user) throw new ForbiddenException('Credentials incorrect');

    // compare the password hash
    const pwMatches = await argon.verify(user.hash, dto.password);
    // if password does not match, throw exception
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect');

    // return the user
    delete user.hash;
    return user;
  }
}
