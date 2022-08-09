<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <h1>کیک شکلاتی</h1>
        <div class="top-right-button-container">
          <b-dropdown
            id="ddown5"
            :text="$t('pages.actions')"
            size="lg"
            variant="outline-primary"
            class="top-right-button top-right-button-single"
            no-fade="true"
          >
            <b-dropdown-item>{{ $t('dashboards.last-week') }}</b-dropdown-item>
            <b-dropdown-item>{{ $t('dashboards.this-month') }}</b-dropdown-item>
          </b-dropdown>
        </div>
        <piaf-breadcrumb />
        <b-tabs nav-class="separator-tabs ml-0 mb-5" content-class="tab-content" :no-fade="true">
          <b-tab :title="$t('pages.details')">
            <b-row>
              <b-colxx xxs="12" lg="4" class="mb-4">
                <b-card class="mb-4" no-body>
                  <div class="position-absolute card-top-buttons">
                    <b-button variant="outline-white" class="icon-button">
                      <i class="simple-icon-pencil" />
                    </b-button>
                  </div>
                  <img src="/assets/img/details/1.jpg" alt="Detail" class="card-img-top" />
                  <b-card-body>
                    <p class="text-muted text-small mb-2">{{ $t('pages.description') }}</p>
                    <p class="mb-3">
                    کیک لایه‌ای (به انگلیسی: Layer cake) نوعی کیک است که از دو یا سه لایهٔ هم اندازه که بر روی هم قرار گرفته‌اند، تشکیل شده است. مابین لایه‌های کیک با موادی مانند خامه یا یک مادهٔ پرحجم پر می‌شود و اطراف و سطح بالای کیک نیز معمولاً با مانند خامهٔ زده شده پوشانده شده
                      <br />
                      <br />و سپس ممکن بر روی آن چاشنی‌ها یا تزئینات، مختلف مانند شکلات، نارگیل، خشکبار و دیگر مواد غذایی یا گل‌های خوراکی قرار داده شود.
                    </p>
                    <p class="text-muted text-small mb-2">{{ $t('pages.rating') }}</p>
                    <div class="mb-3">
                      <stars value="4" :disabled="true"></stars>
                    </div>
                    <p class="text-muted text-small mb-2">{{ $t('pages.price') }}</p>
                    <p class="mb-3">8.14 تومان</p>
                    <p class="text-muted text-small mb-2">{{ $t('pages.ingredients') }}</p>
                    <div class="mb-3">
                      <p class="d-sm-inline-block mb-1">
                        <b-badge pill variant="outline-secondary" class="mb-1 mr-1">شیر</b-badge>
                        <b-badge pill variant="outline-secondary" class="mb-1 mr-1">آرد کیک</b-badge>
                        <b-badge pill variant="outline-secondary" class="mb-1 mr-1">وانیل</b-badge>
                        <b-badge pill variant="outline-secondary" class="mb-1 mr-1">شکر</b-badge>
                        <b-badge pill variant="outline-secondary" class="mb-1 mr-1">تخم مرغ</b-badge>
                        <b-badge pill variant="outline-secondary" class="mb-1 mr-1">روغن زیتون</b-badge>
                        <b-badge pill variant="outline-secondary" class="mb-1 mr-1">نمک</b-badge>
                      </p>
                    </div>
                    <p class="text-muted text-small mb-2">{{ $t('pages.is-vegan') }}</p>
                    <p>خیر</p>
                  </b-card-body>
                </b-card>
                <radial-progress-card
                  :title="$t('pages.order-status')"
                  :percent="85"
                  no-suffle
                  class="mb-4"
                />
                <radial-progress-card
                  :title="$t('pages.bake-progress')"
                  :percent="40"
                  no-suffle
                  class="mb-4"
                />
              </b-colxx>
              <b-colxx xxs="12" lg="8">
                <small-line-charts itemClass="dashboard-small-chart" v-if="isLoad"></small-line-charts>
                <website-visit-chart-card class="mb-4"></website-visit-chart-card>
                <b-card class="mb-4" :title="$t('pages.comments')">
                  <comment-item
                    v-for="(comment,index) in comments"
                    :key="index"
                    :data="comment"
                    detail-path="#"
                  />
                </b-card>
              </b-colxx>
            </b-row>
          </b-tab>
          <b-tab :title="$t('pages.orders')">
            <b-row>
              <b-colxx>
                <order-item
                  v-for="(order,index) in orders"
                  :key="index"
                  :data="order"
                  detail-path="#"
                />
              </b-colxx>
            </b-row>
          </b-tab>
        </b-tabs>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import Stars from "../../../../components/Common/Stars";
import RadialProgressCard from "../../../../components/Cards/RadialProgressCard";
import CommentItem from "../../../../components/Listing/CommentItem";
import OrderItem from "../../../../components/Listing/OrderItem";
import { comments } from "../../../../data/comments";
import orders from "../../../../data/orders";
import SmallLineCharts from "../../../../containers/dashboards/SmallLineCharts";
import WebsiteVisitsChartCard from "../../../../containers/dashboards/WebsiteVisitsChartCard";

export default {
  components: {
    stars: Stars,
    "radial-progress-card": RadialProgressCard,
    "comment-item": CommentItem,
    "order-item": OrderItem,
    "small-line-charts": SmallLineCharts,
    "website-visit-chart-card": WebsiteVisitsChartCard
  },
  data() {
    return {
      isLoad: false,
      comments: comments.slice(0, 5),
      orders
    };
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.isLoad = true;
    }, 50);
  }
};
</script>
