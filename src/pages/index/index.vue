<template>
	<div class="index">
    <wen-line label="count(#state)" :value="count"></wen-line>
    <wen-line label="double(#getter)" :value="double"></wen-line>
    <div><button @click="handleIncrement({ amount: 2 })">+2</button></div>
    <div><button @click="handleDecrement({ amount: 1 })">-1</button></div>
    <div><button @click="handleIncrementAsync({ amount: 2 })">+2(1s)</button></div>
    <wen-line label="姓名(#line)" :value="val"></wen-line>
    <wen-input label="姓名(#input)" :value.sync="val" placeholder="请输入姓名"></wen-input>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import { State, Getter, Mutation, Action } from 'vuex-class'
import { INCREMENT, DECREMENT } from '@/store/types'
import WenInput from '@/components/wen-input.vue'
import WenLine from '@/components/wen-line.vue'
const namespace: string = 'count'
@Component({
  components: {
    WenInput,
    WenLine
  }
})
export default class Index extends Vue {
  public val = ''
  @State((state) => state.count.value) public count?: number
  @Getter('double', { namespace }) public double?: number
  @Mutation(INCREMENT, { namespace }) public handleIncrement: any
  @Mutation(DECREMENT, { namespace }) public handleDecrement: any
  @Action('incrementAsync', { namespace }) public handleIncrementAsync: any
}
</script>
