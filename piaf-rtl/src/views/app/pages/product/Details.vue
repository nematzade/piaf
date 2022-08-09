<template>
<div>
    <b-row>
        <b-colxx xxs="12">
            <h1>دسر توت فرنگی Cake</h1>
            <div class="top-right-button-container">
                <b-dropdown id="ddown5" :text="$t('pages.actions')" size="lg" variant="outline-primary" class="top-right-button top-right-button-single" no-fade="true">
                    <b-dropdown-header>{{ $t('pages.header') }}</b-dropdown-header>
                    <b-dropdown-item>{{ $t('pages.delete') }}</b-dropdown-item>
                    <b-dropdown-item>{{ $t('pages.another-action') }}</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>{{ $t('pages.another-action') }}</b-dropdown-item>
                </b-dropdown>
            </div>
            <piaf-breadcrumb />
            <div class="separator mb-5"></div>
        </b-colxx>
    </b-row>
    <b-row>
        <b-colxx xxs="12" xl="8" class="col-left">
            <b-card class="mb-4" no-body>
                <b-card-body>
                    <glide-component-thumbs :settingsImages="{ bound: true, rewind: false, focusAt: 0, startAt: 0, gap: 5, perView: 1, data: detailImages}" :settingsThumbs="{ bbound: true, rewind: false, focusAt: 0, startAt: 0, gap: 10, perView: 5, data: detailThumbs, breakpoints: { 576: { perView: 4 }, 420: { perView: 3 } } }" />
                </b-card-body>
            </b-card>

            <b-card class="mb-4" no-body>
                <b-tabs card no-fade>
                    <b-tab :title="$t('pages.details-title')" active>
                        <b-row>
                            <b-colxx sm="12">
                                <b-card-text>
                                    <p class="font-weight-bold">بیاین یکم درباره این خوشمزه براتون بگم</p>
                                    <p>
                                       برای درست کردن چیز کیک آلبالو یخچالی با پتی بور ابتدا باید بیسکوییت‌ها را خرد کنید. بیسکویت‌ها را با دست خرد کنید و در غذاساز یا میکسر بریزید تا پودر شوند. کره را به روش بن‌ماری آب کنید که نسوزد و با بیسکویت‌ها خرد شده مخلوط کنید. برای تهیه چیز‌ کیک باید قالب کمربندی داشته باشید (اگر قالب کمربندی ندارد از یک ظرف مناسب که قطر بالا و پایین یکسانی داشته باشد استفاده کنید و کف آن دو لایه سلفون بگذارید).
 <br />
                                        <br />
                                        مخلوط بیسکویت و کره را کف قالب بریزید و با ته قاشق یا کفگیر پلاستیکی خوب فشار بدهید تا تمام ذرات بیسکویت به هم بچسبند. ظرف قالبی را به مدت یک ساعت در یخچال بگذارید تا مخلوط بیسکویت و کره خوب خودش را بگیرد. در این فاصله مواد داخل چیز‌ کیک را آماده کنید.
                                    </p>
                                    <br />
                                    <p class="font-weight-bold">تاریخچه</p>
                                    <p>
                                       
در یک ظرف مناسب کمی آب سرد بریزید و پودر ژلاتین را روی آن بپاشید و هم بزنید. وقتی که مخلوط آب و ژلاتین حالت اسفنجی پیدا کرد، به روش بن‌ماری روی بخار این ترکیب را روان و نرم کنید و کنار بگذارید تا خنک شود.
                                        <br />
                                        <br />
                                        بعد از آن پای چیزکیک توسط اروپایی‌ها به آمریکا هم باز شد. آمریکایی‌ها این بار پنیر خامه‌ای را که بعدها به پنیر «فیلادلفیا» مشهور شد را به مواد این کیک اضافه کردند تا آن‌جا که چیز‌کیک‌های آماده شده با پنیر خامه‌ای به «چیز‌کیک نیویورکی» مشهور شدند و از آن‌جا بود که پای چیز‌کیک با طعم‌های مختلف به یخچال قنادی‌ها و شیرینی فروشی‌ها باز شد. برای مثال چیزکیک ایتالیایی با پنیر «ریکوتا» و «توفو»، نوع آلمانی و هلندی این دسر با پنیر کاتیج و چیز‌کیک ژاپنی با سفیده و نشاسته فراوان از جمله مشهورترین چیز‌کیک‌ها در دنیا هستند.


                                        <br />
                                        <br />
                برای مثال چیزکیک ایتالیایی با پنیر «ریکوتا» و «توفو»، نوع آلمانی و هلندی این دسر با پنیر کاتیج و چیز‌کیک ژاپنی با سفیده و نشاسته فراوان از جمله مشهورترین چیز‌کیک‌ها در دنیا هستند.


                                    </p>
                                    <br />
                                    <p class="font-weight-bold">نسبت استفاده مواد کیک</p>
                                    <b-table borderless :items="tableItems" />
                                </b-card-text>
                            </b-colxx>
                        </b-row>
                    </b-tab>
                    <b-tab :title="`${$t('pages.comments-title')} (19)`">

                        <b-row>
                            <b-colxx sm="12">
                                <b-card-text>
                                    <comment-with-likes v-for="(item,index) in commentWithLikesData" :data="item" :key="`comment_${index}`"></comment-with-likes>

                                    <b-input-group class="comment-contaiener">
                                        <b-form-input :placeholder="$t('pages.addComment')" />
                                        <b-input-group-append>
                                            <b-button variant="primary">
                                                <span class="d-inline-block">{{$t('pages.send')}}</span> <i class="simple-icon-arrow-right ml-2"></i>
                                            </b-button>
                                        </b-input-group-append>
                                    </b-input-group>
                                </b-card-text>
                            </b-colxx>
                        </b-row>
                    </b-tab>
                    <b-tab :title="`${$t('pages.questions-title')} (6)`">
                        <b-row>
                            <b-colxx sm="12">
                                <b-card-text>
                                    <question-answer v-for="(item,index) in detailsQuestionsData" :data="item" :key="`question_${index}`"></question-answer>
                                </b-card-text>
                            </b-colxx>
                        </b-row>
                    </b-tab>
                </b-tabs>
            </b-card>
        </b-colxx>
        <b-colxx xxs="12" xl="4" class="col-right">
            <b-card class="mb-4">
                <div class="mb-3">
                    <div class="post-icon mr-3 d-inline-block">
                        <router-link to="#">
                            <i class="simple-icon-heart mr-1"></i>
                        </router-link>
                        <span>4 {{$t('pages.likes')}}</span>
                    </div>

                    <div class="post-icon mr-3 d-inline-block">
                        <router-link to="#">
                            <i class="simple-icon-bubble mr-1"></i>
                        </router-link>
                        <span>2 {{$t('pages.comments-title')}}</span>
                    </div>
                </div>
                <p class="mb-3">
                    برای درست کردن چیز کیک آلبالو یخچالی با پتی بور ابتدا باید بیسکوییت‌ها را خرد کنید. بیسکویت‌ها را با دست خرد کنید و در غذاساز یا میکسر بریزید تا پودر شوند. کره را به روش بن‌ماری آب کنید که نسوزد و با بیسکویت‌ها خرد شده مخلوط کنید. برای تهیه چیز‌ کیک باید قالب کمربندی داشته باشید (اگر قالب کمربندی ندارد از یک ظرف مناسب که قطر بالا و پایین یکسانی داشته باشد استفاده کنید و کف آن دو لایه سلفون بگذارید).
                    <br /><br />
                    مخلوط بیسکویت و کره را کف قالب بریزید و با ته قاشق یا کفگیر پلاستیکی خوب فشار بدهید تا تمام ذرات بیسکویت به هم بچسبند. ظرف قالبی را به مدت یک ساعت در یخچال بگذارید تا مخلوط بیسکویت و کره خوب خودش را بگیرد. در این فاصله مواد داخل چیز‌ کیک را آماده کنید.
                    <br /><br />
                    مخلوط بیسکویت و کره را کف قالب بریزید و با ته قاشق یا کفگیر پلاستیکی خوب فشار بدهید تا تمام ذرات بیسکویت به هم بچسبند. ظرف قالبی را به مدت یک ساعت در یخچال بگذارید تا مخلوط بیسکویت و کره خوب خودش را بگیرد. در این فاصله مواد داخل چیز‌ کیک را آماده کنید.
                </p>
                <p class="text-muted text-small mb-2">{{$t('forms.tags')}}</p>
                <p class="mb-3">
                    <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>کیک پنیر</b-badge>
                    <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>چیز کیک</b-badge>
                    <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>دستور کیک</b-badge>
                    <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>پخت کیک</b-badge>
                </p>
            </b-card>
            <b-card class="mb-4">
                <b-card-title>{{$t('pages.similar-projects')}}</b-card-title>
                <gallery-detail />
            </b-card>

        </b-colxx>
    </b-row>
</div>
</template>

<script>
import GlideComponentThumbs from '../../../../components/Carousel/GlideComponentThumbs'
import CommentWithLikes from '../../../../containers/pages/CommentWithLikes'
import QuestionAnswer from '../../../../containers/pages/QuestionAnswer'
import GalleryDetail from '../../../../containers/pages/GalleryDetail'

import {
    detailImages,
    detailThumbs
} from "../../../../data/carouselItems";
import {
    commentWithLikesData
} from "../../../../data/comments"
import {
    detailsQuestionsData
} from "../../../../data/questions";

export default {
    components: {
        'glide-component-thumbs': GlideComponentThumbs,
        'comment-with-likes': CommentWithLikes,
        'question-answer': QuestionAnswer,
        'gallery-detail': GalleryDetail,
    },
    data() {
        return {
            isLoad: false,
            detailImages,
            detailThumbs,
            tableItems: [{
                    id: 1,
                    first_name: 'پنیر ماسکارپونه',
                    last_name: '1 بسته',
                    username: 'بله'
                },
                {
                    id: 2,
                    first_name: 'پودر ژلاتین ',
                    last_name: '1 ق.غ',
                    username: 'بله'
                },
                {
                    id: 3,
                    first_name: 'خامه قنادی',
                    last_name: '250 گرم',
                    username: 'بله'
                }
            ],
            commentWithLikesData,
            detailsQuestionsData,
        }
    },
    methods: {

    },
    mounted() {
        setTimeout(() => {
            this.isLoad = true
        }, 50)
    }
}
</script>
