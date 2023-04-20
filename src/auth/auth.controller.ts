import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}

/*
Note for pipe, there are some built-in pipes:
  ParseIntPipe: Parse a string to an integer.
  ParseBoolPipe: Parse a string to a boolean.
  ParseArrayPipe: Parse a string to an array.

  - to use them on pipe of a parameter, you can use:
    @Body('password', ParseIntPipe) password: number
    -> this will parse the password to an integer before passing it to the controller
    and if the password is not an integer, it will throw an error.
*/
