import { ApiProperty } from "@nestjs/swagger";

export class CreateCertificateDto {
  @ApiProperty({ example: "Сертификация", description: "Название сертификации" })
  readonly name: string;
  @ApiProperty({ example: "Описание сертификации", description: "Описание сертификации" })
  description: string;
}