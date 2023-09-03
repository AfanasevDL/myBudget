import { BaseScreen } from "@/core/component/base-screen.component"
import renderService from "@/core/services/render.service"

import template from './home.template.html'
import styles from './home.module.scss'
import { $R } from '@/core/rquery/rquery.lib'
import { Field } from "@/components/ui/field.component"

export class Home extends BaseScreen {
  constructor() {
    super({ title : 'Home' })
  }

  render() {
    const element = renderService.htmlToElement(
      template, 
      [
        new Field({
          name: 'test',
          placeholder: 'enter email',
          variant: 'green'
        })
      ], 
      styles
    )

    $R(element).find('h1').css('color', 'green')
    return element
  }
}
