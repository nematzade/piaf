<template>
  <home-layout>
    <div :class="{ 'landing-page': true, 'show-mobile-menu': showMobileMenu }">
      <div class="mobile-menu" @click="$event.stopPropagation()">
        <a @click="scrollTo('#home')" href="javascript:;" class="logo-mobile">
          <span></span>
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a @click="scrollTo('#features')" href="javascript:;">ویژگی ها</a>
          </li>
          <li class="nav-item">
            <a @click="scrollTo('#layouts')" href="javascript:;">طرح بندی ها</a>
          </li>
          <li class="nav-item">
            <a @click="scrollTo('#components')" href="javascript:;">کامپوننت ها</a>
          </li>
          <li class="nav-item">
            <a @click="scrollTo('#apps')" href="javascript:;">برنامه ها</a>
          </li>
          <li class="nav-item">
            <a @click="scrollTo('#themes')" href="javascript:;">تم های قالب</a>
          </li>
          <li class="nav-item">
            <div class="separator"></div>
          </li>
          <li class="nav-item text-center">
            <a
              class="btn btn-outline-primary btn-sm mobile-menu-cta"
              target="_blank"
              :href="buyUrl"
              >خرید قالب</a
            >
          </li>
        </ul>
      </div>

      <div class="main-container">
        <div class="landing-page-nav">
          <headroom style="height: initial">
            <nav>
              <div class="container d-flex align-items-center justify-content-between">
                <a
                  class="navbar-logo pull-left"
                  @click="scrollTo('#home')"
                  href="javascript:;"
                >
                  <span class="white"></span>
                  <span class="dark"></span>
                </a>
                <ul class="navbar-nav d-none d-lg-flex flex-row">
                  <li class="nav-item">
                    <a @click="scrollTo('#features')" href="javascript:;">ویژگی ها</a>
                  </li>
                  <li class="nav-item">
                    <a @click="scrollTo('#layouts')" href="javascript:;">طرح بندی</a>
                  </li>
                  <li class="nav-item">
                    <a @click="scrollTo('#components')" href="javascript:;"
                      >کامپوننت ها</a
                    >
                  </li>
                  <li class="nav-item">
                    <a @click="scrollTo('#apps')" href="javascript:;">برنامه ها</a>
                  </li>
                  <li class="nav-item">
                    <a @click="scrollTo('#themes')" href="javascript:;">تم های قالب</a>
                  </li>
                  <li class="nav-item pl-4">
                    <a
                      class="btn btn-outline-semi-light btn-sm pr-4 pl-4"
                      target="_blank"
                      :href="buyUrl"
                      >خرید قالب</a
                    >
                  </li>
                </ul>
                <span
                  class="mobile-menu-button"
                  @click="
                    showMobileMenu = !showMobileMenu;
                    $event.stopPropagation();
                  "
                >
                  <i class="simple-icon-menu"></i>
                </span>
              </div>
            </nav>
          </headroom>
        </div>

        <div class="content-container" id="home">
          <div class="section home" id="sectionHome">
            <div class="container">
              <div class="row home-row" id="homeRow">
                <div class="col-12 d-block d-md-none">
                  <a :href="adminRoot" target="_blank">
                    <img
                      alt="mobile hero"
                      class="mobile-hero"
                      src="/assets/img/landing-page/home-hero-mobile.png"
                    />
                  </a>
                </div>

                <div class="col-12 col-xl-4 col-lg-5 col-md-6">
                  <div class="home-text">
                    <div class="display-1">
                      جادوی کار
                      <br />
                      مارو توی جزئیاتش ببین
                    </div>
                    <p class="white mb-5">
                      قالب پیاف یه ترکیبی از نهایت خلاقیت یه گرافیست، کدزنی و خود زنی یه
                      برنامه نویس و نهایت تلاش یک ux کار هست
                      <br />
                      <br />
                      درسته که قالب اجزا و صفحات زیادی داره ولی سعی کردیم از زبانها و
                      تنولوژی هایی استفاده کنیم که یکسان باشند
                      <br />
                      <br />
                      دموی قالب رو ببین حتما ازش خوشت میاد 😊
                    </p>
                    <a
                      class="btn btn-light btn-xl mr-2 mb-2"
                      :href="adminRoot"
                      target="_blank"
                    >
                      دیدنه قالب
                      <i class="simple-icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div
                  class="col-12 col-xl-7 offset-xl-1 col-lg-7 col-md-6 d-none d-md-block"
                >
                  <a :href="adminRoot" target="_blank">
                    <img alt="hero" src="/assets/img/landing-page/home-hero.png" />
                  </a>
                </div>
              </div>

              <div class="row">
                <div class="col-12 p-0">
                  <div class="home-carousel">
                    <glide-component :settings="slideSettings">
                      <div
                        class="card"
                        v-for="(f, index) in slideItems"
                        :key="`slide_${index}`"
                      >
                        <div class="card-body text-center">
                          <div>
                            <i :class="f.icon + ' large-icon'"></i>
                            <h5 class="mb-3 font-weight-semibold">{{ f.title }}</h5>
                          </div>
                          <div>
                            <p class="detail-text">{{ f.detail }}</p>
                          </div>
                        </div>
                      </div>
                    </glide-component>
                  </div>
                </div>
              </div>

              <div class="row">
                <a
                  class="btn btn-circle btn-outline-semi-light hero-circle-button"
                  @click="scrollTo('#features')"
                >
                  <i class="simple-icon-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="container" id="features">
              <div class="row">
                <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>ویژگی ها تو یه نظر</h1>
                  <p>
                    ما قبل از اینکه این قالب رو بنویسیم، به این فکر کردیم که خودمون بعنوان
                    برنامه نویس، چه نیازها و انتظاراتی از یه قالب مدیرت میتونیم داشته
                    باشیم؟!
                    <br />
                    بعد همه ی اون مواردی که تهیه کردیم رو بعنوان الویت های اصلی در پیاف
                    قرار دادیم
                    <br />
                    ما دوست داشتیم قالبی که استفاده میکنیم پیچیده نباشه، سرعت عمل خوبی
                    داشته باشه و اجزای اضافی نداشته باشه که حجم قالب زیاد بشه!
                  </p>
                </div>
              </div>

              <div v-for="(feature, i) in features" :key="`feature_${i}`">
                <div v-if="i % 2 == 0" class="row feature-row">
                  <div class="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                    <div class="feature-text-container">
                      <h2>{{ feature.title }}</h2>
                      <p v-html="feature.detail"></p>
                    </div>
                  </div>
                  <div
                    class="col-12 col-md-6 col-lg-6 offset-lg-1 offset-md-0 position-relative"
                  >
                    <img
                      :alt="feature.title"
                      :src="feature.img"
                      class="feature-image-right feature-image-charts position-relative"
                    />
                  </div>
                </div>
                <div v-if="i % 2 == 1" class="row feature-row">
                  <div class="col-12 col-md-6 col-lg-6 order-2 order-md-1">
                    <img
                      :alt="feature.title"
                      :src="feature.img"
                      class="feature-image-left feature-image-charts"
                    />
                  </div>
                  <div
                    class="col-12 col-md-6 offset-md-0 col-lg-5 offset-lg-1 d-flex align-items-center order-1 order-md-2"
                  >
                    <div class="feature-text-container">
                      <h2>{{ feature.title }}</h2>
                      <p v-html="feature.detail"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section background">
            <div class="container" id="layouts">
              <div class="row">
                <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>ساختار قالب و چیدمان ها</h1>
                  <p>
                    ما همه ی سعی و تلاش خودمون رو کردیم تا اونچه که مخاطبین ما از یه قالب
                    انتظار دارنو برآورده کنیم
                    <br />
                    به شما این اطمینان رو می دیم که همگی دارای کد تمیز هستند. به تنهایی یا
                    در کنار یکدیگر، عملکرد خوبی دارند و زیبا بنظر می رسند.
                  </p>
                </div>
              </div>

              <div class="row pt-5">
                <div
                  class="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5"
                  v-for="(l, index) in layouts"
                  :key="`layout_${index}`"
                >
                  <img
                    class="img-fluid border-radius depth-2 mb-3 semi-rounded"
                    :src="l.img"
                  />
                  <h4 class="text-center">{{ l.title }}</h4>
                </div>
              </div>
            </div>
          </div>

          <div class="section mb-0">
            <div class="container" id="components">
              <div class="row mb-5">
                <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>کامپوننت های قالب</h1>
                  <p>
                    سعی کردیم توی درست کردن اجزا، از حداقل ابزار استفاده کنیم چراکه کم حجم
                    بودن قالب یکی از مولفه های مهم برای هر برنامه نویسه
                    <br />
                    از کامپوننت های بوتسترپ استفاده کردیم و حتی اونها رو توسعه دادیم که به
                    موارد مفیدتری تبدیل بشن!
                    <br />
                    و ازجمله مهم ترین کارهایی که انجام دادیم هماهنگی این کامپوننت ها با تک
                    تک تم های قالب پیاف بود
                    <br />
                    از استفاده ی اجزا و یا حتی توسعه اونها لذت ببرید 😊
                  </p>
                </div>
              </div>
            </div>
            <img
              class="components-image mb-5 pb-5"
              src="/assets/img/landing-page/components.jpg"
            />
          </div>

          <div class="section background">
            <div class="container" id="apps">
              <div class="row">
                <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center mb-4">
                  <h1>برنامه های آماده</h1>
                  <p class="section-text">
                    با استفاده از کامپوننت هایی که توی این قالب هستند، سه تا برنامه ی
                    آماده براتون درست کردیم که بنظرم حتی اگه بخواین یه چیزی مشابه اینها
                    بسازین خیلی توی زمان شما صرفه جویی میکنه
                  </p>
                </div>
              </div>
              <div class="row screenshots">
                <div class="col-12 text-center mb-4">
                  <b-tabs
                    nav-class="justify-content-center"
                    content-class="card-body pt-0"
                    :no-fade="true"
                  >
                    <b-tab
                      v-for="(app, index) in applications"
                      :key="`app_${index}`"
                      :title="app.title"
                    >
                      <router-link :to="app.path">
                        <img :alt="app.title" :src="app.img" class="app-image" />
                      </router-link>
                    </b-tab>
                  </b-tabs>
                </div>
              </div>
            </div>
          </div>

          <div class="section mb-0">
            <div class="container" id="themes">
              <div class="row mb-5">
                <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>رنگ بندی های قالب</h1>
                  <p>
                    10 تا تم رنگی براتون درست کردیم

                    <br />
                    حتی اگه از اینها خوشتون نیومد میتونین یه تم رنگی به دلخواه خودتون
                    بسازین چون تمام متغیر های رنگ ها با Sass ساخته شدن
                  </p>
                </div>
              </div>
              <div class="row mb-5" v-for="(t, index) in themes" :key="`themes_${index}`">
                <div class="col-12 text-center mb-3">
                  <h4 class="text-center">{{ t.title }}</h4>
                </div>
                <div class="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                  <div class="depth-2 color-container">
                    <div
                      v-for="(align, i) in ['left', 'center', 'right']"
                      :key="`align_light_${index}_${i}`"
                      :class="t.class + '-light-' + (i + 1) + ' color-' + align"
                    ></div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-3">
                  <div class="depth-2 color-container">
                    <div
                      v-for="(align, i) in ['left', 'center', 'right']"
                      :key="`align_dark_${index}_${i}`"
                      :class="t.class + '-dark-' + (i + 1) + ' color-' + align"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section background background-no-bottom mb-0 pb-0">
            <div class="container">
              <div class="row">
                <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>تاحالا از تعریفام کیف کردی؟</h1>
                  <p>
                    اگه دوست داری این قالب رو قانونی از ما تهیه کن تا هم به توسعه تیم کمک
                    کرده باشی و هم باعث بشی انگیزه ای برای ما بشه تا محصولات با کیفیت عالی
                    براتون تهیه کنیم
                  </p>
                </div>
                <div
                  class="col-12 offset-0 col-lg-6 offset-lg-3 newsletter-input-container"
                >
                  <div class="text-center mb-3">
                    <a class="btn btn-secondary btn-xl" target="_blank" :href="buyUrl"
                      >خرید قالب</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section footer mb-0" id="sectionFooter">
            <div class="container">
              <div class="row footer-row">
                <div class="col-12 text-right">
                  <a
                    class="btn btn-circle btn-outline-semi-light footer-circle-button"
                    @click="scrollTo('#home')"
                    href="javascript:;"
                  >
                    <i class="simple-icon-arrow-up"></i>
                  </a>
                </div>
                <div class="col-12 text-center footer-content">
                  <a @click="scrollTo('#home')" href="javascript:;">
                    <img
                      class="footer-logo"
                      alt="footer logo"
                      src="/assets/logos/white-full.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="container copyright pt-5 pb-5">
              <div class="row">
                <div class="col-12"></div>
                <div class="col-12 text-center">
                  <p class="mb-0">2021 © فاطمه کاظمی زاده</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </home-layout>
</template>

<script>
import { headroom } from "vue-headroom";
import VueScrollTo from "vue-scrollto";
import HomeLayout from "../../layouts/HomeLayout";
import GlideComponent from "../../components/Carousel/GlideComponent";
import { adminRoot, buyUrl } from "../../constants/config";
const slideSettings = {
  type: "carousel",
  gap: 30,
  perView: 4,
  hideNav: true,
  peek: { before: 10, after: 10 },
  breakpoints: {
    600: { perView: 1 },
    992: { perView: 2 },
    1200: { perView: 3 },
  },
};

const slideItems = [
  {
    icon: "iconsminds-mouse-3",
    title: "منوی کلیک راست",
    detail: "برای این گذاشتیم که استفاده ی کامل و حداکثری از قالب بتونین داشته باشید",
  },
  {
    icon: "iconsminds-electric-guitar",
    title: "ویدیو پلیر",
    detail: "با پکیج Video.js کار میکنه و حتی از یوتیوب هم پشتیبانی میکنه",
  },
  {
    icon: "iconsminds-keyboard",
    title: "شورتکات صفحه کلید",
    detail:
      "میانبر های صفحه کلید درست کردیم که هم قابل تنظیمه و هم ux برای کاربرهات بهتر میکنه",
  },
  {
    icon: "iconsminds-three-arrow-fork ",
    title: "منو با دوتا پنل",
    detail:
      "یه منو با سه تا مرحله، تا هرجا خواستی ازش استفاده کنی و حتی تو ریسپانسیو هم اذیتت نمیکنه",
  },
  {
    icon: "iconsminds-deer",
    title: "پکیج ایکن Mind",
    detail:
      "1040 آیکن توی 53 تا مجموعه, طراحیش پیکسلی هست و توی پروژه برای شما قرار دادیم تا هرکدوم دلت خواست استفاده کنی",
  },
  {
    icon: "iconsminds-palette",
    title: "20 تا تم رنگی",
    detail: "رنگ ها، آیکن ها و طراحی هارمونی که توسط بهترین گرافیستهامون طراحی شدن",
  },
  {
    icon: "iconsminds-air-balloon-1",
    title: "3 اپلیکیشن کاربردی",
    detail:
      "برنامه هایی رو برات قرار دادیم که در زمان یه برنامه نویس بشدت صرفه جویی میکنه",
  },
  {
    icon: "iconsminds-resize",
    title: "ریسپانسیو قوی و موبایلی",
    detail:
      "کلاسهای سفارشی بوت استرپ 4 xxs & xxl تجربه های بهتری را برای صفحات کوچک و بزرگ ارائه می دهد",
  },
];

const features = [
  {
    title: "طراحی ساده و دلنشین",
    img: "/assets/img/landing-page/features/pleasant-design.png",
    detail:
      "<p>بعنوان یه برنامه نویس، تجربه ای که دارم اینه که هررررررچقدرم خوب کد بزنی تا وقتی که ظاهر سایتت خوب نباشه، مشتری یا کاربر متوجه زحمتهات نمیشه!!</p>" +
      "<p>طراحی خوب همیشه ضرورت نیست، ولی وقتی محصول نهایی به چشم کاربر یا مشتری، زیبا باشه، انگیزه ی قشنگی برای ما ایجاد میشه</p>" +
      "<p>ناگفته نمونه که ماهم برای اینکه قالب پیاف به این حد از محبوبیت برسه زمان زیادی رو برای آیکن ها و هماهنگی رنگها صرف کردیم</p>" +
      "<p>و اولین چیزی که در این پروسه الویت کار خودمون قرار دادیم، ux کاربرهامون بوده</p>",
  },
  {
    title: "ریسپانسیو میدونی تا کجاست؟",
    img: "/assets/img/landing-page/features/extra-responsive.png",
    detail:
      "<p>نقطه ی Xxs برای دستگاه های خیلی کوچیکه که کمتر از 420 پیکسل رزولوشن دارند</p>" +
      "<p>نقطه ی Xs بین رزولوشن های 420 پیکسل تا 567 پیکسل کار میکنه</p>" +
      "<p>نقطه ی Xl برای کامپیوترهای معمولی که رزولوشن بیت 1200 تا 1440 پیکسل دارند کار میکنه</p>" +
      "<p>و چیزی که براتون اضافه کردیم نقطه ی Xxl برای صفحه نمایش های بزرگتر با رزولوشن بیش از 1440 پیکسل کار میکنه</p>" +
      "<p>هدف ما از ایجاد این قابلیت های ریسپانسیو این بوده که هم تجربه ی کاربری یا (UX) بهتری رو به کاربرهامون انتقال بدیم و هم انعطاف استفاده از دستگاه ها رو برای کار با قالب راحت تر کنیم</p>",
  },
  {
    title: "درباره چارت ها بخونین",
    img: "/assets/img/landing-page/features/superfine-charts.png",
    detail:
      "<p>یه باور عمومی داریم که میگه استفاده از چارت ها باعث میشه که داده ها و اطلاعاتو راحت تر مجسم کنیم</p>" +
      "<p>نمیگم نمودارها بد هستن..! اصلا.. اونها خیلی هم عالی هستن</p>" +
      "<p>ولی به نظر من نموداری خوبه که استفاده ازش راحت باشه، هم برای برنامه نویس هم کاربری که قراره اونو ببینه</p>" +
      "<p>باید رنگهاش به قالب بیاد و هماهنگ باشه</p>" +
      "<p>نمودار باید ریسپانسیو باشه یا تمام قابلیت هاش قابل تنظیم باشه</p>" +
      "<p>میدونی چرا اینا رو میگم؟! چون ما همشو توی پیاف داریم 😎</p>" +
      "<p>ما فقط از یک پکیج برای ایجاد نمودارها استفاده کردیم و هم سعی کردیم ساده باشند و هم با تمام رنگ بندی های قالب هماهنگ باشه</p>" +
      "<p>میتونین همین الان رنگ تم رو عوض کنین و نمودارها رو در رنگهای دیگه هم ببینید</p>" 
  },
  {
    title: "طرح بندی حتی برای کسب و کار",
    img: "/assets/img/landing-page/features/layouts-for-the-job.png",
    detail:
    "<p>توی داستان پیاف، یکی از چیزهایی که ما براش در نظر گرفتیم پرسونای کاربرهامون بود.</p>" +
    "<p>یعنی ما دوست داشتیم که بتونیم مخاطبانی که هدف ما هستند بیشتر باشه</p>" +
    "<p>مثلا یک نفر یک قالب مینویسه با موضوع فروشگاهی، خب مشخصه مخاطبانی که هدفش هستند کسانی هستند که تصمیم دارند فروشگاه بسازن</p>" +
    "<p>ماهم توی فرآیند ساخت این قالب افرادی رو درنظر گرفتیم که تصمیم دارن از این قالب برای مدیریت کسب و کار خودشون استفاده کنن</p>" +
    "<p>تمام لایوت ها رو طوری درنظر گرفتیم که حتی کاربران با دانش فنی پایین هم بتونن به فهم و درک خوبی از کارکرد قالب برسند</p>" +
    "<p>حتی برای بیزینس های مختلف، طرح های مختلفی قراردادیم.</p>"     
  },
  {
    title: "منوی هوشمند",
    img: "/assets/img/landing-page/features/smart-menu.png",
    detail:
    "<p>انصافا بیاین قبول کنیم که توی پنل های مدیریت، دیگه استفاده از منوهای آکاردئونی یه چیز قدیمی و تکراری شده</p>" +
    "<p>بیاین ببینین ما چه کررررررردیم تو پیاف</p>" +
    "<p>به جای این تکراری بازی ها و اسکی رفتن ها، ما دوتا پنل ایجاد کردیم و صفحات رو بر اساس اون دسته بندی کردیم</p>" +
    "<p>اسمشو <b>منوی هوشمند</b> گذاشتم؛ چونکه:</p>" +
    "<ul><li>1. خودتون میتونین تنظیم کنین که کدوم پنلش توی چه سایزی باز یا بسته باشه</li><li>2. خود منو تشخیص میده توی این سایز ریسپانسیوی که قرار داره، کدوم پنلش رو مخفی کنه یا کدوم رو نمایش بده</li></ul>" 
  },
];

const layouts = [
  {
    title: "منو پیش فرض",
    img: "/assets/img/landing-page/layouts/menu-default.jpg",
  },
  {
    title: "زیرمنو مخفی",
    img: "/assets/img/landing-page/layouts/menu-subhidden.jpg",
  },
  {
    title: "منو مخفی",
    img: "/assets/img/landing-page/layouts/menu-hidden.jpg",
  },
  {
    title: "لیست عکس",
    img: "/assets/img/landing-page/layouts/image-list.jpg",
  },
  {
    title: "لیست Thumb",
    img: "/assets/img/landing-page/layouts/thumb-list.jpg",
  },
  { title: "دیتا لیست", img: "/assets/img/landing-page/layouts/data-list.jpg" },
  { title: "جزئیات", img: "/assets/img/landing-page/layouts/details.jpg" },
  {
    title: "احراز هویت",
    img: "/assets/img/landing-page/layouts/authentication.jpg",
  },
  {
    title: "نتایج جستجو",
    img: "/assets/img/landing-page/layouts/search-results.jpg",
  },
  {
    title: "اپلیکیشن SPA",
    img: "/assets/img/landing-page/layouts/spa.jpg",
  },
  {
    title: "دیتا لیست با منو مخفی",
    img: "/assets/img/landing-page/layouts/data-list-app-menu-hidden.jpg",
  },
  { title: "تب ها", img: "/assets/img/landing-page/layouts/tabs.jpg" },
];

const applications = [
  {
    title: "نظرسنجی",
    path: `${adminRoot}/applications/survey`,
    img: "/assets/img/landing-page/applications/survey.jpg",
  },
  {
    title: "چت",
    path: `${adminRoot}/applications/chat`,
    img: "/assets/img/landing-page/applications/chat.jpg",
  },
  {
    title: "وظایف - Todo",
    path: `${adminRoot}/applications/todo`,
    img: "/assets/img/landing-page/applications/todo.jpg",
  },
];

const themes = [
  { title: "Navy Blue", class: "bluenavy" },
  { title: "Olympic Blue", class: "blueolympic" },
  { title: "Yale Blue", class: "blueyale" },
  { title: "Moss Green", class: "greenmoss" },
  { title: "Lime Green", class: "greenlime" },
  { title: "Carrot Orange", class: "carrotorange" },
  { title: "Ruby Red", class: "rubyred" },
  { title: "Monster Purple", class: "monsterpurple" },
  { title: "Steel Grey", class: "steelgrey" },
  { title: "Granola Yellow", class: "granolayellow" },
];
const scrollOptions = {
  container: "body",
  easing: "ease-in",
  offset: -120,
  force: true,
  x: false,
  y: true,
};

export default {
  components: {
    "home-layout": HomeLayout,
    "glide-component": GlideComponent,
    headroom: headroom,
  },
  data() {
    return {
      showMobileMenu: false,
      adminRoot,
      buyUrl,
      slideSettings,
      slideItems,
      features,
      layouts,
      applications,
      themes,
    };
  },
  methods: {
    onWindowResize() {
      const homeRect = document.getElementById("homeRow").getBoundingClientRect();
      const homeSection = document.getElementById("sectionHome");
      homeSection.style.backgroundPositionX = homeRect.x - 580 + "px";

      const footerSection = document.getElementById("sectionFooter");
      footerSection.style.backgroundPositionX =
        event.target.innerWidth - homeRect.x - 2000 + "px";

      if (event.target.innerWidth >= 992) {
        this.showMobileMenu = false;
      }
    },
    onWindowScroll() {
      this.showMobileMenu = false;
    },
    onWindowClick() {
      this.showMobileMenu = false;
    },

    scrollTo(target) {
      VueScrollTo.scrollTo(target, 200, scrollOptions);
    },
  },
  mounted() {
    document.body.classList.add("no-footer");
    window.addEventListener("scroll", this.onWindowScroll);
    window.addEventListener("resize", this.onWindowResize);
    window.addEventListener("click", this.onWindowClick);
  },
  beforeDestroy() {
    document.body.classList.remove("no-footer");
    window.removeEventListener("scroll", this.onWindowScroll);
    window.removeEventListener("resize", this.onWindowResize);
    window.removeEventListener("click", this.onWindowClick);
  },
};
</script>
