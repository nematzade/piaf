<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4" :title="$t('form-components.vue-autosuggest')">
        <b-form>
          <b-row>
            <b-colxx xxs="12" md="6">
              <vue-autosuggest
                class="autosuggest"
                :input-props="{
                  id: 'autosuggest__input',
                  class: 'form-control',
                  placeholder: $t('form-components.type-a-cake'),
                }"
                :suggestions="filteredOptions"
                :render-suggestion="renderSuggestion"
                :get-suggestion-value="getSuggestionValue"
                :limit="6"
                @selected="onAutosuggestSelected"
                @input="onAutoSuggestInputChange"
              ></vue-autosuggest>
            </b-colxx>
          </b-row>
        </b-form>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
import { VueAutosuggest } from "vue-autosuggest";

export default {
  components: {
    "vue-autosuggest": VueAutosuggest,
  },
  data() {
    return {
      filteredOptions: [],
      selected: {},

      suggestions: [
        {
          data: [
            {
              id: 1,
              name: "کیک اسفنجی و کرم",
            },
            {
              id: 2,
              name: "کیک گیلاس",
            },
            {
              id: 3,
              name: "کیک شکلاتی",
            },
            {
              id: 4,
              name: "فت راسکل",
            },
            {
              id: 5,
              name: "کیک پرتغالی",
            },
            {
              id: 6,
              name: "کیک اسفنجی",
            },
            {
              id: 7,
              name: "نان خرمایی",
            },
            {
              id: 8,
              name: "نان جو رژیمی",
            },
            {
              id: 9,
              name: "پارکین",
            },
            {
              id: 10,
              name: "وافل نوتلا",
            },
            {
              id: 11,
              name: "نون خامه ای",
            },
            {
              id: 12,
              name: "کاپ کیک قهوه",
            },
            {
              id: 13,
              name: "پای سیب",
            },
            {
              id: 14,
              name: "کیک صبحانه",
            },
            {
              id: 15,
              name: "شیرینی ناپلئونی",
            },
            {
              id: 16,
              name: "دسر پاناکوتا",
            },
            {
              id: 17,
              name: "دسر توت فرنگی",
            },
            {
              id: 18,
              name: "دسر تیرامیسو",
            },
            {
              id: 19,
              name: "چیزکیک",
            },
            {
              id: 20,
              name: "سوهان عسلی",
            },
          ],
        },
      ],
    };
  },
  methods: {
    onAutoSuggestInputChange(text, oldText) {
      if (text === null) {
        /* Maybe the text is null but you wanna do
         *  something else, but don't filter by null.
         */
        return;
      }

      const filteredData = this.suggestions[0].data.filter((option) => {
        return option.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });

      // Store data in one property, and filtered in another
      this.filteredOptions = [
        {
          data: filteredData,
        },
      ];
    },

    onAutosuggestSelected(item) {
      this.selected = item;
    },
    renderSuggestion(suggestion) {
      const character = suggestion.item;
      return character.name; /* renderSuggestion will override the default suggestion template slot. */
    },
    getSuggestionValue(suggestion) {
      return suggestion.item.name;
    },
  },
};
</script>
