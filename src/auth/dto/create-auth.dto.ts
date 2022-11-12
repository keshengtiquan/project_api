import { IsConfirmRule } from "@/common/rules/confirm.rule"
import { IsNotExistsRule } from "@/common/rules/is-not-exist.rule"
import { IsNotEmpty } from "class-validator"

export class CreateAuthDto {
  @IsNotEmpty({message: '用户名不能为空'})
  @IsNotExistsRule('user',{message: '用户已存在'})
  name: string

  @IsNotEmpty({message: '密码不能为空'})
  password: string

  @IsNotEmpty({message: '确认密码不能为空'})
  @IsConfirmRule({message: '两次密码不一致'})
  password_confirm: string

  role: string
}
