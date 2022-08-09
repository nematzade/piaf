<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.popover-tooltip')"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('popover-tooltip.popover')">
            <span v-for="(item,index) in popovers" :key="index" >
                <b-button :id="'pop-'+item.placement" variant="secondary" class="mr-1 mb-1">{{ item.text }}</b-button>
                <b-popover :target="'pop-'+item.placement"
                        :placement="item.placement"
                        :content="item.body">
                </b-popover>
            </span>
        </b-card>
    </b-colxx>

    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('popover-tooltip.tooltip')">
            <span v-for="(item,index) in tooltips" :key="index" >
                <b-button :id="'tool-'+item.placement" variant="secondary" class="mr-1 mb-1">{{ item.text }}</b-button>
                <b-tooltip :target="'tool-'+item.placement"
                        :placement="item.placement"
                        :title="item.body">
                </b-tooltip>
            </span>
        </b-card>
    </b-colxx>

  </b-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      popovers: [
        {
          placement: 'top',
          text: 'پاپ آورد در بالا',
          body: 'مثلا متنی که توی پاپ اور میاد اینجا قرارمیگیره'
        },
        {
          placement: 'bottom',
          text: 'پاپ اورد در پایین',
          body: 'مثلا متنی که توی پاپ اور میاد اینجا قرارمیگیره'
        },
        {
          placement: 'left',
          text: 'پاپ اورد در چپ',
          body: 'مثلا متنی که توی پاپ اور میاد اینجا قرارمیگیره'
        },
        {
          placement: 'right',
          text: 'پاپ اورد در راست',
          body: 'مثلا متنی که توی پاپ اور میاد اینجا قرارمیگیره'
        }
      ],
      tooltips: [
        {
          placement: 'top',
          text: 'تولتیپ در بالا',
          body: 'متنه توی پاپ اور'
        },
        {
          placement: 'bottom',
          text: 'تولتیپ در پایین',
          body: 'متنه توی پاپ اور'
        },
        {
          placement: 'left',
          text: 'تولتیپ در چپ',
          body: 'متنه توی پاپ اور'
        },
        {
          placement: 'right',
          text: 'تولتیپ در راست',
          body: 'متنه توی پاپ اور'
        }
      ]
    }
  },
  mounted () {
    /* popover manuel close */
    this.$root.$on('bv::popover::show', () => {
      this.$root.$emit('bv::hide::popover')
    })
    document.addEventListener('click', e => {
      if (e.target.id.indexOf('pop') === -1) {
        this.$root.$emit('bv::hide::popover')
      }
    })
  }
}
</script>
