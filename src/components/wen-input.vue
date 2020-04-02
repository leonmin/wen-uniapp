<template>
  <div class="wen-input">
    <div class="wen-line">
      <div class="wen-line-label">{{label}}</div>
      <div class="wen-line-value">
        <input
          type="text"
          :value="val"
          :placeholder="placeholder"
          @input="handleInput" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop, PropSync, Emit } from 'vue-property-decorator'
@Component
export default class WenInput extends Vue {
  @Prop({
    type: String,
    default: ''
  }) private label?: string
  @Prop({
    type: String,
    default: '请输入'
  }) private placeholder?: string
  @PropSync('value',
    {
      type: [String, Number],
      default: ''
    }
  ) private val?: string | number
  public handleInput (e: any) {
    this.val = e.target.value
  }
}
</script>
