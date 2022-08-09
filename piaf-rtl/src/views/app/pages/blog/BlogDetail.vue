<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.blog-detail')"/>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>

    <b-row>
      <b-colxx xxs="12" md="12" xl="8" class="col-left">
        <b-card class="mb-4" no-body>
          <single-lightbox thumb="/assets/img/details/5.jpg" large="/assets/img/details/5.jpg"
                           class-name="responsive border-0 card-img-top mb-3"/>
          <b-card-body>
            <div class="mb-5">
              <h5 class="card-title">تزئین کاپ کیک به شکل گل آفتابگردان</h5>
              <p>
           خیلی وقتا میشه که برای مهمونی ها و یا جشن های کوچیکمون کیک و کاپ کیک می پزیم و دلمون می خواد اونها رو تزیین کنیم تا جذاب تر بشن و از سادگی دربیان. گاهی ممکنه فکر کنید تزیین کردن کیک و کار با قیف و ماسوره های مختلف کار سختیه. ولی من در این مطلب آموزش گام به گام تزیین کاپ کیک به شکل گل آفتاب گردون رو براتون قرار دادم که هم خیلی زیباست و هم خیلی ساده، حتی اگه تازه کار هم باشید و تا حالا از قیف برای تزیین کیک هاتون استفاده نکرده باشید، به راحتی از پسش برمیاد. در ادامه مطلب همراهمون باشید.

اول از همه باید کاپ کیک هاتون رو بپزید و اجازه بدید که کاملا سرد بشن، برای تهیه کاپ کیک میتونید از پودر کاپ کیک های آماده استفاده کنید و یا خودتون کاپ کیک شکلاتی و یا کاکائویی مورد نظرتون رو بپزید.
              </p>
              <p>
اول از همه باید کاپ کیک هاتون رو بپزید و اجازه بدید که کاملا سرد بشن، برای تهیه کاپ کیک میتونید از پودر کاپ کیک های آماده استفاده کنید و یا خودتون کاپ کیک شکلاتی و یا کاکائویی مورد نظرتون رو بپزید.


              </p>
            </div>
            <div class="mb-5">
              <h5 class="card-title">مواد لازم</h5>
              <ul class="list-unstyled">
                <li>کاپ کیک شکلاتی</li>
                <li>بیسکویت شکلاتی گرد</li>
                <li>شکلات تخته ای</li>
                <li>چیپس شکلات</li>
                <li>فراستینگ</li>
                <li>رنگ خوراکی زرد نارنجی و سبز</li>
              </ul>
            </div>
            <div>
              <h5 class="card-title">مراحل تزئین</h5>
              <p>
            اول از همه باید کاپ کیک هاتون رو بپزید و اجازه بدید که کاملا سرد بشن، برای تهیه کاپ کیک میتونید از پودر کاپ کیک های آماده استفاده کنید و یا خودتون کاپ کیک شکلاتی و یا کاکائویی مورد نظرتون رو بپزید.

مقدار کمی از شکلات تخته ای رو ذوب کنید، ما برای هر کاپ کیک به یک قاشق غذاخوری شکلات ذوب شده نیاز داریم. بهتره که شکلات رو به شیوه ی صحیح تمپر کنید..

از بیسکویت های شکلاتی گرد و کرمدار استفاده کنید. بهترین گزینه بیسکویت اوریو هست که نمونه های ایرانیش هم در بازار زیاده. یک قاشق از شکلات ذوب شده رو روی بیسکویت بریزید.
              </p>
              <p>
             شکلات های چیپسی ریز رو روی شکلات مذابی که روی بیسکویت ریختید بریزید تا کاملا سطح بیسکویت رو بپوشونه. برای هر کاپ کیک به یک دونه از اینها نیاز دارید. پس این ها رو به تعداد مورد نظرتون درست کنید و در یخچال قرار بدید تا شکلات های مذاب کاملا سفت بشن و خودشون رو بگیرن و چیپس های شکلاتی روی بیسکویت ها محکم بچسبن.

ما به دو تا رنگ خامه یا هر کرم دیگه ای که برای تزئین انتخاب کردید، نیاز داریم؛ زرد طلایی و سبز. برای تهیه رنگ زرد طلایی از رنگ خوراکی زرد و کمی نارنجی استفاده کنید. حواستون باشه که رنگ رو کم کم اضافه کنید و هم بزنید تا به رنگ مورد نظرتون برسید.
              </p>
            </div>
          </b-card-body>
        </b-card>
      </b-colxx>

      <b-colxx xxs="12" md="12" xl="4" class="col-left">
        <b-card class="mb-4" no-body>
          <b-card-body class="p-0">
            <video-player class-name="video-js side-bar-video card-img-top"
                          :autoplay="false" :controls="true"
                          :controlBar="{pictureInPictureToggle: false}"
                          poster="/assets/img/video/poster.jpg"
                          :sources="[{ src: 'https://raw.githubusercontent.com/bower-media-samples/big-buck-bunny-1080p-60fps-30s/master/video.mp4', type: 'video/mp4'}]"/>
          </b-card-body>
          <b-card-body>
            <p class="list-item-heading mb-4">چیز کیک ساده با توت تازه و نعناع</p>
            <footer>
              <p class="text-muted text-small mb-0 font-weight-light">4 مرداد 1400</p>
            </footer>
          </b-card-body>
        </b-card>
        <b-card class="mb-4" no-body>
          <b-card-body>
            <b-card-title>{{ $t('pages.recent-posts') }}</b-card-title>
            <div class="remove-last-border remove-last-margin remove-last-padding">
              <recent-post v-for="(post,postIndex) in recentPosts" :data="post" :key="`recent_post_${postIndex}`"/>
            </div>
          </b-card-body>
        </b-card>
        <b-card class="mb-4" no-body>
          <b-card-body>
            <b-card-title>{{ $t('todo.categories') }}</b-card-title>
            <div v-for="(categoryItem,cIndex) in blogCategories" :key="`category_${cIndex}`"
                 class="d-flex flex-row align-items-center mb-3">
              <router-link :to="categoryItem.link">
                <i :class="`large-icon initial-height ${categoryItem.icon}`"></i>
              </router-link>
              <div class="pl-3 pt-2 pr-2 pb-2">
                <router-link :to="categoryItem.link">
                  <p class="list-item-heading mb-1">{{ categoryItem.title }}</p>
                </router-link>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import SingleLightbox from "../../../../containers/pages/SingleLightbox";
import VideoPlayer from "../../../../components/Common/VideoPlayer";
import RecentPost from "../../../../components/Common/RecentPost";
import {blogData, blogCategories} from "../../../../data/blog";

export default {
  components: {
    "single-lightbox": SingleLightbox,
    "video-player": VideoPlayer,
    "recent-post": RecentPost,
  },
  data() {
    return {
      recentPosts: blogData.slice(5),
      blogCategories
    };
  },
  methods: {},
  mounted() {
  }
};
</script>
