<template>
<b-row>
    <b-colxx xxs="12">
        <b-card class="mb-4" title="مقادیر پیش فرض">
            <b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-right-bottom">
                <b-form-group label="نوع موقعیت">
                    <b-form-radio-group stacked v-model="$v.locationType.$model" :state="!$v.locationType.$error">
                        <b-form-radio value="home">مسکونی</b-form-radio>
                        <b-form-radio value="work">کسب و کار</b-form-radio>
                        <b-form-radio value="awesome">عالی</b-form-radio>
                    </b-form-radio-group>
                    <b-form-invalid-feedback class="d-block" v-if="!$v.locationType.required">این یکی رو انتخاب کنید</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="کیفیت مکان">
                    <b-form-checkbox-group v-model="$v.locationQualities.$model" :state="!$v.locationQualities.$error">
                        <b-form-checkbox value="beautiful">زیباست</b-form-checkbox>
                        <b-form-checkbox value="awesome">عالی</b-form-checkbox>
                        <b-form-checkbox value="wonderful">خیلی عالی</b-form-checkbox>
                    </b-form-checkbox-group>
                    <b-form-invalid-feedback class="d-block" v-if="!$v.locationQualities.required">این یکی رو انتخاب کنید</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="نام">
                    <b-form-input type="text" v-model="$v.firstname.$model" :state="!$v.firstname.$error" />
                    <b-form-invalid-feedback v-if="!$v.firstname.required">این قسمت نامعتبر است</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="نام خانوادگی">
                    <b-form-input type="text" v-model="$v.lastname.$model" :state="!$v.lastname.$error" />
                    <b-form-invalid-feedback v-if="!$v.lastname.required">این قسمت نامعتبر است</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="خیابان">
                    <b-form-input type="text" v-model="$v.location.street.$model" :state="!$v.location.street.$error" />
                    <b-form-invalid-feedback v-if="!$v.location.street.required">این خطاست</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="سوئیت">
                    <b-form-input type="text" v-model="$v.location.suite.$model" :state="!$v.location.suite.$error" />
                    <b-form-invalid-feedback v-if="!$v.location.suite.required">این خطاست</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="شهر">
                    <b-form-input type="text" v-model="$v.location.city.$model" :state="!$v.location.city.$error" />
                    <b-form-invalid-feedback v-if="!$v.location.city.required">این خطاست</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="استان">
                    <b-form-select v-model="$v.location.state.$model" :state="!$v.location.state.$error" :options="stateOptions" plain />
                    <b-form-invalid-feedback>یک مکان رو انتخاب کنید</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Zip Code">
                    <b-form-input type="text" v-model="$v.location.zip.$model" :state="!$v.location.zip.$error" />
                    <b-form-invalid-feedback v-if="!$v.location.zip.required">این خطاست</b-form-invalid-feedback>
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
    required,
    maxLength,
    minLength,
    alpha,
    email,
    sameAs,
    numeric,
    maxValue,
    minValue,
    helpers
} = require("vuelidate/lib/validators");

const upperCase = helpers.regex("upperCase", /^[A-Z]*$/);

export default {
    data() {
        return {
            stateOptions: ["", "یه چیزی", "یه چیز دیگه", "هر چیزی"],
            locationType: "work",
            locationQualities: ["زیبا", "عالی", "خیلی عالی"],
            firstname: "فاطمه",
            lastname: "کاظمی زاده",
            location: {
                street: "15امام خمینی",
                suite: "110",
                city: "تهران",
                state: "یه چیزی",
                zip: "32256"
            }
        };
    },
    mixins: [validationMixin],
    validations: {
        locationType: {
            required
        },
        locationQualities: {
            required
        },
        firstname: {
            required
        },
        lastname: {
            required
        },
        location: {
            street: {
                required
            },
            suite: {
                required
            },
            city: {
                required
            },
            state: {
                required
            },
            zip: {
                required
            }
        }
    },
    methods: {
        onValitadeFormSubmit() {
            this.$v.$touch();
            console.log(
                JSON.stringify({
                    name: this.name,
                    email: this.email,
                    emailAgain: this.emailAgain,
                    max: this.max,
                    min: this.min,
                    withRegex: this.withRegex
                })
            );
        }
    }
};
</script>
