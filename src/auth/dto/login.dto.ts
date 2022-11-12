import { IsConfirmRule } from "@/common/rules/confirm.rule"
import { IsNotEmpty } from "class-validator"

export class LoginDto {
  @IsNotEmpty({message: '用户名不能为空'})
  name: string

  @IsNotEmpty({message: '密码不能为空'})
  password: string

}