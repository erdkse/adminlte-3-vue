import {Options, Vue} from 'vue-class-component';

@Options({
    props: {
        msg: String
    }
})
export default class HelloWorld extends Vue {
    msg!: string;
}
