<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4" :title="$t('form-components.custom-inputs')">
        <b-form-group :label="$t('form-components.checkboxes')">
          <b-form-checkbox-group stacked>
            <b-form-checkbox value="first">این کادر انتخاب سفارشی را علامت بزنید</b-form-checkbox>
            <b-form-checkbox value="second">یا این یکی</b-form-checkbox>
            <b-form-checkbox value="third" disabled>ولی این یکی غیر فعاله نمی تونی</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-form-group :label="$t('form-components.radios')">
          <b-form-radio-group stacked>
            <b-form-radio value="first">این رادیو باتن سفارشی رو تیک بزن</b-form-radio>
            <b-form-radio value="second">یا این یکی</b-form-radio>
            <b-form-radio value="third" disabled>اما این یکی غیر فعاله نمی تونی</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('form-components.inline')">
          <b-form-checkbox-group>
            <b-form-checkbox value="first">یه اینپوت خطی</b-form-checkbox>
            <b-form-checkbox value="second"> یا یکی دیگه</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
export default {};
</script>
