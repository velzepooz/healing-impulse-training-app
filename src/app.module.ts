import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GeneralModule } from './modules/general.module';
import { configService } from './shared/config/config.service';

@Module({
  imports: [
    MongooseModule.forRoot(configService.getMongoDbConfig()),
    GeneralModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
