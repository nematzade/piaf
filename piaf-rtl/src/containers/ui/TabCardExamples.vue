<template>
  <b-row>
    <b-colxx xxs="12">
      <h5 class="mb-4 card-title">{{ $t('cards.tab-card') }}</h5>
      <b-row>
        <b-colxx xxs="12" xs="6" lg="6">
          <b-card class="mb-4" no-body>
            <b-tabs card no-fade>
              <b-tab title="تب 1" active>
                <h5 class="mb-4 card-title">چیز کیک ساده با توت تازه و نعناع</h5>
                <b-button size="sm" variant="outline-primary">ویرایش</b-button>
              </b-tab>
              <b-tab title="تب 2">
                <h5 class="mb-4 card-title">کیک عروسی با گل ماکارون و زغال اخته</h5>
                <b-button size="sm" variant="outline-primary">ویرایش</b-button>
              </b-tab>
              <b-tab title="تب 3">
                <h5 class="mb-4 card-title">چیز کیک ساده با توت تازه و نعناع</h5>
                <b-button size="sm" variant="outline-primary">ویرایش</b-button>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-colxx>
        <b-colxx xxs="12" xs="6" lg="6" class="mb-3">
          <b-card class="mb-4" no-body>
            <b-tabs card no-fade>
              <b-tab title="تب 1" active title-item-class="w-50 text-center">
                <h5 class="mb-4 card-title">چیز کیک ساده با توت تازه و نعناع</h5>
                <b-button size="sm" variant="outline-primary">ویرایش</b-button>
              </b-tab>
              <b-tab title="تب 2" title-item-class="w-50 text-center">
                <h5 class="mb-4 card-title">کیک عروسی با گل ماکارون و زغال اخته</h5>
                <b-button size="sm" variant="outline-primary">ویرایش</b-button>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-colxx>
      </b-row>
    </b-colxx>
  </b-row>
</template>
<script>
export default {};
</script>
