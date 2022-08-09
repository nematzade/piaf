<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.invoice')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" no-body>
          <b-card-body>{{ $t("pages.invoice-info") }}</b-card-body>
        </b-card>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12" class="mb-3">
        <h3>{{ $t("pages.vue-version") }}</h3>
      </b-colxx>
    </b-row>

    <b-row class="invoice-vue">
      <b-colxx xxs="12" class="mb-5">
        <b-card class="mb-5 invoice-contents" no-body>
          <b-card-body class="d-flex flex-column justify-content-between">
            <div class="d-flex flex-column">
              <div class="d-flex flex-row justify-content-between pt-2 pb-2">
                <div class="d-flex align-self-center">
                  <img src="https://coloredstrategies.com/mailing/piaf.png" />
                </div>
                <div class="d-flex w-30 text-right align-self-center">
                  <p class="text-small text-semi-muted mb-0">
                    تهران، بزرگراه خلیج فارس، خیابان امام ایران<br />784 451 12 47
                  </p>
                </div>
              </div>
              <div class="border-bottom pt-4 mb-5"></div>

              <div class="d-flex flex-row justify-content-between mb-5">
                <div
                  class="d-flex flex-column w-70 mr-2 p-4 text-semi-muted bg-semi-muted"
                >
                  <p class="mb-0">فاطمه کاظمی زاده</p>
                  <p class="mb-0">تهران،ایران</p>
                </div>
                <div
                  class="d-flex w-30 flex-column text-right p-4 text-semi-muted bg-semi-muted"
                >
                  <p class="mb-0">صورتحساب #:741</p>
                  <p class="mb-0">4 مرداد 1399</p>
                </div>
              </div>

              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th class="text-muted text-extra-small mb-2">نام مورد</th>
                    <th class="text-muted text-extra-small mb-2">تعداد</th>
                    <th class="text-right text-muted text-extra-small mb-2">قیمت</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>کیک اسفنجی و کرم</td>
                    <td>3 قطعه</td>
                    <td class="text-right">14.82 تومان</td>
                  </tr>
                  <tr>
                    <td>کیک شکلاتی</td>
                    <td>2 قطعه</td>
                    <td class="text-right">8.97 تومان</td>
                  </tr>
                  <tr>
                    <td>فت راسکل</td>
                    <td>2 قطعه</td>
                    <td class="text-right">18.48 تومان</td>
                  </tr>
                  <tr>
                    <td>دسر تیرامیسو</td>
                    <td>2 قطعه</td>
                    <td class="text-right">4.24 تومان</td>
                  </tr>
                  <tr>
                    <td>چیزکیک</td>
                    <td>3 قطعه</td>
                    <td class="text-right">6.27 تومان</td>
                  </tr>
                  <tr>
                    <td>دسر توت فرنگی</td>
                    <td>2 قطعه</td>
                    <td class="text-right">10.97 تومان</td>
                  </tr>
                  <tr>
                    <td>کیک اسفنجی</td>
                    <td>2 قطعه</td>
                    <td class="text-right">21.24 تومان</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="d-flex flex-column">
              <div class="border-bottom pt-3 mb-5"></div>
              <table class="table table-borderless d-flex justify-content-end">
                <tbody>
                  <tr>
                    <td class="text-semi-muted">جمع کل :</td>
                    <td class="text-right">61.68 تومان</td>
                  </tr>
                  <tr>
                    <td class="text-semi-muted">مالیات :</td>
                    <td class="text-right">61.82 تومان</td>
                  </tr>
                  <tr>
                    <td class="text-semi-muted">باربری :</td>
                    <td class="text-right">3.21 تومان</td>
                  </tr>
                  <tr class="font-weight-bold">
                    <td class="text-semi-muted">جمع :</td>
                    <td class="text-right">68.14 تومان</td>
                  </tr>
                </tbody>
              </table>
              <div class="border-bottom pt-3 mb-5"></div>
              <p class="text-muted text-small text-center">
                این فاکتور در سیستم ایجاد شده و بدون مهر و امضا معتبر نیست
              </p>
            </div>
          </b-card-body>
        </b-card>
      </b-colxx>
    </b-row>

    <b-row>
      <b-colxx xxs="12" class="mb-3">
        <h3>{{ $t("pages.inline-version") }}</h3>
      </b-colxx>
    </b-row>

    <b-row class="invoice">
      <b-colxx xxs="12" class="mb-4">
        <div
          class="invoice-contents"
          style="
            background-color: #ffffff;
            height: 1200px;
            max-width: 830px;
            font-family: Helvetica, Arial, sans-serif !important;
            position: relative;
          "
        >
          <table
            bgcolor="#ffffff"
            border="0"
            cellpadding="0"
            cellspacing="0"
            style="
              width: 100%;
              background-color: #ffffff;
              border-collapse: separate !important;
              border-spacing: 0;
              color: #242128;
              margin: 0;
              padding: 30px;
              padding-top: 20px;
            "
            heigth="auto"
          >
            <tbody>
              <tr>
                <td
                  align="left"
                  valign="center"
                  style="
                    padding-bottom: 35px;
                    padding-top: 15px;
                    border-top: 0;
                    width: 100% !important;
                  "
                >
                  <img src="https://coloredstrategies.com/mailing/piaf.png" />
                </td>
                <td
                  align="right"
                  valign="center"
                  style="padding-bottom: 20px; border-top: 0; width: 100% !important"
                >
                  <p
                    style="
                      color: #8f8f8f;
                      font-weight: normal;
                      line-height: 1.2;
                      font-size: 12px;
                      white-space: nowrap;
                    "
                  >
                    تهران، بزرگراه خلیج فارس، خیابان امام ایران
                    <br />
                    784 451 12 47
                  </p>
                </td>
              </tr>
              <tr>
                <td colspan="2" style="padding-top: 30px; border-top: 1px solid #f1f0f0">
                  <table style="width: 100%;font-family:yekan">
                    <tbody>
                      <tr>
                        <td
                          style="
                            vertical-align: middle;
                            border-radius: 3px;
                            padding: 30px;
                            background-color: #f9f9f9;
                            border-right: 5px solid white;
                          "
                        >
                          <p
                            style="
                              color: #303030;
                              font-size: 14px;
                              line-height: 1.6;
                              margin: 0;
                              padding: 0;
                            "
                          >
                            فاطمه کاظمی زاده
                            <br />
                            تهران،ایران
                          </p>
                        </td>

                        <td
                          style="
                            text-align: right;
                            padding-top: 0px;
                            padding-bottom: 0;
                            vertical-align: middle;
                            padding: 30px;
                            background-color: #f9f9f9;
                            border-radius: 3px;
                            border-left: 5px solid white;
                          "
                        >
                          <p
                            style="
                              color: #8f8f8f;
                              font-size: 14px;
                              padding: 0;
                              line-height: 1.6;
                              margin: 0;
                            "
                          >
                            صورت حساب #: 741<br />
                            ۲۷ مرداد ۱۴۰۰
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table style="width: 100%; margin-top: 40px;font-family:yekan">
                    <thead>
                      <tr>
                        <th
                          style="
                            text-align: right;
                            font-size: 10px;
                            color: #8f8f8f;
                            padding-bottom: 15px;
                            padding-top: 10px;
                            padding-bottom: 10px;
                            
                          "
                        >
                          نام مورد
                        </th>
                        <th
                          style="
                            text-align: right;
                            font-size: 10px;
                            color: #8f8f8f;
                            padding-bottom: 15px;
                            padding-top: 10px;
                            padding-bottom: 10px;
                          "
                        >
                          تعداد
                        </th>
                        <th
                          style="
                            text-align: right;
                            font-size: 10px;
                            color: #8f8f8f;
                            padding-bottom: 15px;
                            padding-top: 10px;
                            padding-bottom: 10px;
                          "
                        >
                          مبلغ
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style="
                            padding-top: 0px;
                            padding-bottom: 5px;
                            padding-top: 10px;
                            padding-bottom: 10px;
                          "
                        >
                          <p
                            style="
                              font-size: 13px;
                              line-height: 1;
                              margin-bottom: 0;
                              color: #303030;
                              font-weight: 500;
                              margin-top: 10px;
                            "
                          >
                            کیک اسفنجی و کرم
                          </p>
                        </td>
                        <td style="padding-top: 10px; padding-bottom: 10px">
                          <p
                            href="#"
                            style="
                              font-size: 13px;
                              text-decoration: none;
                              line-height: 1;
                              color: #909090;
                              margin-top: 0px;
                              margin-bottom: 0;
                            "
                          >
                            3 قطعه
                          </p>
                        </td>
                        <td
                          style="
                            padding-top: 0px;
                            padding-bottom: 0;
                            text-align: right;
                            padding-top: 10px;
                            padding-bottom: 10px;
                          "
                        >
                          <p
                            style="
                              font-size: 13px;
                              line-height: 1;
                              color: #303030;
                              margin-bottom: 0;
                              margin-top: 0;
                              vertical-align: top;
                              white-space: nowrap;
                            "
                          >
                            تومان 14.82
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td
                          style="
                            padding-top: 0px;
                            padding-bottom: 5px;
                            padding-top: 10px;
                            padding-bottom: 10px;
                          "
                        >
                          <p
                            style="
                              font-size: 13px;
                              line-height: 1;
                              margin-bottom: 0;
                              color: #303030;
                              font-weight: 500;
                              margin-top: 10px;
                            "
                          >
                            شکلاتی کیک
                          </p>
                        </td>
                        <td style="padding-top: 10px; padding-bottom: 10px">
                          <p
                            href="#"
                            style="
                              font-size: 13px;
                              text-decoration: none;
                              line-height: 1;
                              color: #909090;
                              margin-top: 0px;
                              margin-bottom: 0;
                            "
                          >
                            2 قطعه
                          </p>
                        </td>
                        <td
                          style="
                            padding-top: 0px;
                            padding-bottom: 0;
                            text-align: right;
                            padding-top: 10px;
                            padding-bottom: 10px;
                          "
                        >
                          <p
                            style="
                              font-size: 13px;
                              line-height: 1;
                              color: #303030;
                              margin-bottom: 0;
                              margin-top: 0;
                              vertical-align: top;
                              white-space: nowrap;
                            "
                          >
                            تومان 8.97
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style="
                            padding-top: 0px;
                            padding-bottom: 5px;
                            padding-top: 10px;
                            padding-bottom: 10px;
                          "
                        >
                          <p
                            style="
                              font-size: 13px;
                              line-height: 1;
                              margin-bottom: 0;
                              color: #303030;
                              font-weight: 500;
                              margin-top: 10px;
                            "
                          >
                            فت راسکل
                          </p>
                        </td>
                        <td style="padding-top: 10px; padding-bottom: 10px">
                          <p
                            href="#"
                            style="
                              font-size: 13px;
                              text-decoration: none;
                              line-height: 1;
                              color: #909090;
                              margin-top: 0px;
                              margin-bottom: 0;
                            "
                          >
                            2 قطعه
                          </p>
                        </td>
                        <td
                          style="
                            padding-top: 0px;
                            padding-bottom: 0;
                            text-align: right;
                            padding-top: 10px;
                            padding-bottom: 10px;
                          "
                        >
                          <p
                            style="
                              font-size: 13px;
                              line-height: 1;
                              color: #303030;
                              margin-bottom: 0;
                              margin-top: 0;
                              vertical-align: top;
                              white-space: nowrap;
                            "
                          >
                            تومان 18.24
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style="
                            padding-top: 0px;
                            padding-bottom: 5px;
                            padding-top: 10px;
                            padding-bottom: 10px;
                          "
                        >
                          <p
                            style="
                              font-size: 13px;
                              line-height: 1;
                              margin-bottom: 0;
                              color: #303030;
                              font-weight: 500;
                              margin-top: 10px;
                            "
                          >
                            دسر تیرامیسو
                          </p>
                        </td>
                        <td style="padding-top: 10px; padding-bottom: 10px">
                          <p
                            href="#"
                            style="
                              font-size: 13px;
                              text-decoration: none;
                              line-height: 1;
                              color: #909090;
                              margin-top: 0px;
                              margin-bottom: 0;
                            "
                          >
                            2 قطعه
                          </p>
                        </td>
                        <td
                          style="
                            padding-top: 0px;
                            padding-bottom: 0;
                            text-align: right;
                            padding-top: 10px;
                            padding-bottom: 10px;
                          "
                        >
                          <p
                            style="
                              font-size: 13px;
                              line-height: 1;
                              color: #303030;
                              margin-bottom: 0;
                              margin-top: 0;
                              vertical-align: top;
                              white-space: nowrap;
                            "
                          >
                            تومان 4.24
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style="
                            padding-top: 0px;
                            padding-bottom: 5px;
                            padding-top: 10px;
                            padding-bottom: 10px;
                          "
                        >
                          <p
                            style="
                              font-size: 13px;
                              line-height: 1;
                              margin-bottom: 0;
                              color: #303030;
                              font-weight: 500;
                              margin-top: 10px;
                            "
                          >
                            چیزکیک
                          </p>
                        </td>
                        <td style="padding-top: 10px; padding-bottom: 10px">
                          <p
                            href="#"
                            style="
                              font-size: 13px;
                              text-decoration: none;
                              line-height: 1;
                              color: #909090;
                              margin-top: 0px;
                              margin-bottom: 0;
                            "
                          >
                            3 قطعه
                          </p>
                        </td>
                        <td
                          style="
                            padding-top: 0px;
                            padding-bottom: 0;
                            text-align: right;
                            padding-top: 10px;
                            padding-bottom: 10px;
                          "
                        >
                          <p
                            style="
                              font-size: 13px;
                              line-height: 1;
                              color: #303030;
                              margin-bottom: 0;
                              margin-top: 0;
                              vertical-align: top;
                              white-space: nowrap;
                            "
                          >
                            تومان 6.27
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style="
                            padding-top: 0px;
                            padding-bottom: 5px;
                            padding-top: 10px;
                            padding-bottom: 10px;
                          "
                        >
                          <p
                            style="
                              font-size: 13px;
                              line-height: 1;
                              margin-bottom: 0;
                              color: #303030;
                              font-weight: 500;
                              margin-top: 10px;
                            "
                          >
                            دسر توت فرنگی
                          </p>
                        </td>
                        <td style="padding-top: 10px; padding-bottom: 10px">
                          <p
                            href="#"
                            style="
                              font-size: 13px;
                              text-decoration: none;
                              line-height: 1;
                              color: #909090;
                              margin-top: 0px;
                              margin-bottom: 0;
                            "
                          >
                            2 قطعه
                          </p>
                        </td>
                        <td
                          style="
                            padding-top: 0px;
                            padding-bottom: 0;
                            text-align: right;
                            padding-top: 10px;
                            padding-bottom: 10px;
                          "
                        >
                          <p
                            style="
                              font-size: 13px;
                              line-height: 1;
                              color: #303030;
                              margin-bottom: 0;
                              margin-top: 0;
                              vertical-align: top;
                              white-space: nowrap;
                            "
                          >
                            تومان 10.97
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style="
                            padding-top: 0px;
                            padding-bottom: 5px;
                            padding-top: 10px;
                            padding-bottom: 10px;
                          "
                        >
                          <p
                            style="
                              font-size: 13px;
                              line-height: 1;
                              margin-bottom: 0;
                              color: #303030;
                              font-weight: 500;
                              margin-top: 10px;
                            "
                          >
                            کیک اسفنجی
                          </p>
                        </td>
                        <td style="padding-top: 10px; padding-bottom: 10px">
                          <p
                            href="#"
                            style="
                              font-size: 13px;
                              text-decoration: none;
                              line-height: 1;
                              color: #909090;
                              margin-top: 0px;
                              margin-bottom: 0;
                            "
                          >
                            2 قطعه
                          </p>
                        </td>
                        <td
                          style="
                            padding-top: 0px;
                            padding-bottom: 0;
                            text-align: right;
                            padding-top: 10px;
                            padding-bottom: 10px;
                          "
                        >
                          <p
                            style="
                              font-size: 13px;
                              line-height: 1;
                              color: #303030;
                              margin-bottom: 0;
                              margin-top: 0;
                              vertical-align: top;
                              white-space: nowrap;
                            "
                          >
                            تومان 21.24
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>

          <table
            bgcolor="#ffffff"
            border="0"
            cellpadding="0"
            cellspacing="0"
            style="
              position: absolute;
              bottom: 0;
              width: 100%;
              background-color: #ffffff;
              border-collapse: separate !important;
              border-spacing: 0;
              color: #242128;
              margin: 0;
              padding: 30px;
              padding-top: 20px;
            "
            heigth="auto"
          >
            <tr>
              <td colspan="3" style="border-top: 1px solid #f1f0f0">&nbsp;</td>
            </tr>
            <tr>
              <td
                colspan="2"
                style="width: 100%; padding-top: 10px; padding-bottom: 10px"
              >
                <p
                  href="#"
                  style="
                    font-size: 13px;
                    text-decoration: none;
                    line-height: 1.6;
                    color: #909090;
                    margin-top: 0px;
                    margin-bottom: 0;
                    text-align: left;
                  "
                >
                  جمع کل:
                </p>
              </td>
              <td
                style="
                  padding-top: 0px;
                  text-align: left;
                  padding-top: 10px;
                  padding-bottom: 10px;
                "
              >
                <p
                  style="
                    font-size: 13px;
                    line-height: 1.6;
                    color: #303030;
                    margin-bottom: 0;
                    margin-top: 0;
                    vertical-align: top;
                    white-space: nowrap;
                    margin-right: 15px;
                  "
                >
                  61.82 تومان
                </p>
              </td>
            </tr>
            <tr>
              <td
                colspan="2"
                style="width: 100%; padding-top: 10px; padding-bottom: 10px"
              >
                <p
                  href="#"
                  style="
                    font-size: 13px;
                    text-decoration: none;
                    line-height: 1.6;
                    color: #909090;
                    margin-top: 0px;
                    margin-bottom: 0;
                    text-align: left;
                  "
                >
                  مالیات :
                </p>
              </td>
              <td
                style="
                  padding-top: 0px;
                  text-align: left;
                  padding-top: 10px;
                  padding-bottom: 10px;
                "
              >
                <p
                  style="
                    font-size: 13px;
                    line-height: 1.6;
                    color: #303030;
                    margin-bottom: 0;
                    margin-top: 0;
                    vertical-align: top;
                    white-space: nowrap;
                    margin-right: 15px;
                  "
                >
                  2.18 تومان
                </p>
              </td>
            </tr>
            <tr>
              <td
                colspan="2"
                style="width: 100%; padding-top: 10px; padding-bottom: 10px"
              >
                <p
                  href="#"
                  style="
                    font-size: 13px;
                    text-decoration: none;
                    line-height: 1.6;
                    color: #909090;
                    margin-top: 0px;
                    margin-bottom: 0;
                    text-align: left;
                  "
                >
                  باربری :
                </p>
              </td>
              <td
                style="
                  padding-top: 0px;
                  text-align: left;
                  padding-top: 10px;
                  padding-bottom: 10px;
                "
              >
                <p
                  style="
                    font-size: 13px;
                    line-height: 1.6;
                    color: #303030;
                    margin-bottom: 0;
                    margin-top: 0;
                    vertical-align: top;
                    white-space: nowrap;
                    margin-right: 15px;
                  "
                >
                  3.21 تومان
                </p>
              </td>
            </tr>
            <tr>
              <td
                colspan="2"
                style="width: 100%; padding-bottom: 15px; padding-top: 10px"
              >
                <p
                  href="#"
                  style="
                    font-size: 13px;
                    text-decoration: none;
                    line-height: 1.6;
                    color: #909090;
                    margin-top: 0px;
                    margin-bottom: 0;
                    text-align: left;
                  "
                >
                  <strong>جمع : </strong>
                </p>
              </td>
              <td
                style="
                  padding-top: 0px;
                  text-align: right;
                  padding-bottom: 15px;
                  padding-top: 10px;
                "
              >
                <p
                  style="
                    font-size: 13px;
                    line-height: 1.6;
                    color: #303030;
                    margin-bottom: 0;
                    margin-top: 0;
                    vertical-align: top;
                    white-space: nowrap;
                    margin-right: 15px;
                    text-align: right;
                  "
                >
                  <strong>64.14 تومان</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td colspan="3" style="border-top: 1px solid #f1f0f0">&nbsp;</td>
            </tr>
            <tr>
              <td colspan="3" style="text-align: center">
                <p style="color: #909090; font-size: 11px; text-align: center">
                  این فاکتور در سیستم ایجاد شده و بدون مهر و امضا معتبر نیست
                </p>
              </td>
            </tr>
          </table>
        </div>
      </b-colxx>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
