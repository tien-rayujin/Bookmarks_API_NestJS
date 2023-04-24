import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          // url: process.env.DATABASE_URL,
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }

  // clean up the db for test env, another method is use onDelete: Cascade on primary key but I dont want to do the migration
  cleanDb() {
    // tear down process
    this.$transaction([this.bookmark.deleteMany(), this.user.deleteMany()]);
  }
}
