<template>
<b-row>
    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('forms.basic')">
            <b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
                <b-form-group :label="$t('forms.name')">
                    <b-form-input type="text" v-model.trim="$v.name.$model" :state="!$v.name.$error" />
                    <b-form-invalid-feedback>نام لازم است!</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="رتبه">
                    <b-form-input type="text" v-model.trim="$v.rank.$model" :state="!$v.rank.$error" />
                    <b-form-invalid-feedback>این یک خطاست</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="مثلا گزینه انتخابی">
                    <b-form-select v-model.trim="$v.select.$model" :state="!$v.select.$error" :options="selectOptions" plain />
                    <b-form-invalid-feedback>یک گزینه را انتخاب کنید</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="جزییات">
                    <b-textarea v-model.trim="$v.detail.$model" :state="!$v.detail.$error"></b-textarea>
                    <b-form-invalid-feedback>لطفاً جزئیاتی را وارد کنید</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="انتخاب رادیو باتن ها" class="error-l-150">
                    <b-form-radio-group stacked v-model.trim="$v.customRadio.$model">
                        <b-form-radio value="first">انتخاب یک رادیو باتن </b-form-radio>
                        <b-form-radio value="second">یا این یکی</b-form-radio>
                        <b-form-radio value="third">اما این یکی غیر فعاله</b-form-radio>
                    </b-form-radio-group>
                    <b-form-invalid-feedback class="d-block" v-if="!$v.customRadio.required && $v.customRadio.$dirty">این یکی رو انتخاب کنید</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="چک باکس های سفارشی" class="error-l-150">
                    <b-form-checkbox-group v-model.trim="$v.customCheckbox.$model" >
                        <b-form-checkbox value="yes">بله </b-form-checkbox>
                        <b-form-checkbox value="no">خیر</b-form-checkbox>
                    </b-form-checkbox-group>
                    <b-form-invalid-feedback class="d-block" v-if="!$v.customCheckbox.required && $v.customCheckbox.$dirty">این یکی رو انتخاب کنید</b-form-invalid-feedback>
                </b-form-group>
                <b-button type="submit" variant="primary" class="mt-4" >{{ $t('forms.submit') }}</b-button>
            </b-form>
        </b-card>
    </b-colxx>
</b-row>
</template>

<script>
import {
    validationMixin
} from "vuelidate";
const {
    required
} = require("vuelidate/lib/validators");
export default {
    data() {
        return {
            selectOptions: [
                "",
                "Option1",
                "Option2",
                "Option3",
                "Option4",
                "Option5"
            ],
            name: "",
            rank: "",
            select: "",
            detail: "",
            customRadio: "",
            customCheckbox: []
        };
    },
    mixins: [validationMixin],
    validations: {
        name: {
            required
        },
        rank: {
            required
        },
        select: {
            required
        },
        detail: {
            required
        },
        customRadio: {
            required
        },
        customCheckbox: {
            required
        }
    },
    methods: {
        onValitadeFormSubmit() {
            this.$v.$touch();
            console.log(
                JSON.stringify({
                    name: this.name,
                    rank: this.rank,
                    select: this.select,
                    detail: this.detail,
                    customRadio: this.customRadio,
                    customCheckbox: this.customCheckbox
                })
            );
        }
    }
};
</script>
