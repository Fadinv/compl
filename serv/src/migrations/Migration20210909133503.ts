import { Migration } from '@mikro-orm/migrations';

export class Migration20210909133503 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "product" ("id_product" serial primary key, "name" varchar(255) not null, "description" varchar(255) null, "price" int4 null);');
  }

}
