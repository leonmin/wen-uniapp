<template>
  <div class="wen-line">
    <div class="wen-line-label">{{label}}</div>
    <div class="wen-line-value">{{value}}</div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class WenLine extends Vue {
  @Prop({
    type: String,
    default: ''
  }) private label?: string
  @Prop({
    type: String,
    default: ''
  }) private value?: string
}
</script>
