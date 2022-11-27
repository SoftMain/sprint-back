import { ApiProperty } from "@nestjs/swagger";

export class CreateCompanyDto {
  @ApiProperty({ example: "Компания", description: "Наименование" })
  readonly name: string;
}