<template>
  <b-row>
    <b-colxx class="disable-text-selection">
      <list-page-heading
        :title="$t('menu.data-list')"
        :selectAll="selectAll"
        :isSelectedAll="isSelectedAll"
        :isAnyItemSelected="isAnyItemSelected"
        :keymap="keymap"
        :displayMode="displayMode"
        :changeDisplayMode="changeDisplayMode"
        :changeOrderBy="changeOrderBy"
        :changePageSize="changePageSize"
        :sort="sort"
        :searchChange="searchChange"
        :from="from"
        :to="to"
        :total="total"
        :perPage="perPage"
      ></list-page-heading>
      <template v-if="isLoad">
        <list-page-listing
          :displayMode="displayMode"
          :items="items"
          :selectedItems="selectedItems"
          :toggleItem="toggleItem"
          :lastPage="lastPage"
          :perPage="perPage"
          :page="page"
          :changePage="changePage"
          :handleContextMenu="handleContextMenu"
          :onContextMenuAction="onContextMenuAction"
        ></list-page-listing>
      </template>
      <template v-else>
        <div class="loading"></div>
      </template>
    </b-colxx>
    <b-modal id="modalbasic" ref="modalbasic" :title="$t('modal.modal-title2')">
      کاربر عزیزی که الان این صفحه رو باز کردی
      <br />
      شاید برات سوال باشه که چرا این صفحه انگلیسیه. خب باید بگم داده های این
      صفحه کاملا داره از وب سرویس خونده میشه و من هیچ دخالتی در ویرایش داده ها
      ندارم
      <br />
      میتونم اونو برات بصورت استاتیک و فارسی بزارم ولی دیگه برات این صفحه
      کاربردی نداره چون اصل استفاده ی این صفحه نمونه ی وب سرویس و فراخوانی داده
      از اونه
      <br/>
      منم بخاطر همین بهش هیچ دست نمیزنم

      <template slot="modal-footer">
        <b-button variant="secondary" @click="hideModal('modalbasic')"
          >اکی فهمیدم!</b-button
        >
      </template>
    </b-modal>
  </b-row>
</template>

<script>
import axios from "axios";
import { apiUrl } from "../../../../constants/config";
import ListPageHeading from "../../../../containers/pages/ListPageHeading";
import ListPageListing from "../../../../containers/pages/ListPageListing";
import { createLogger } from "vuex";

export default {
  components: {
    "list-page-heading": ListPageHeading,
    "list-page-listing": ListPageListing,
  },
  data() {
    return {
      isLoad: false,
      apiBase: apiUrl + "/cakes/fordatatable",
      displayMode: "list",
      sort: {
        column: "title",
        label: "Product Name",
      },
      page: 1,
      perPage: 4,
      search: "",
      from: 0,
      to: 0,
      total: 0,
      lastPage: 0,
      items: [],
      selectedItems: [],
    };
  },

  methods: {
    // hide modal
    hideModal() {
      this.$refs.modalbasic.hide();
    },
    loadItems() {
      this.isLoad = false;

      axios
        .get(this.apiUrl)
        .then((response) => {
          return response.data;
        })
        .then((res) => {
          this.total = res.total;
          this.from = res.from;
          this.to = res.to;
          this.items = res.data.map((x) => {
            return {
              ...x,
              img: x.img.replace("/img/", "/img/products/"),
            };
          });
          this.perPage = res.per_page;
          this.selectedItems = [];
          this.lastPage = res.last_page;
          this.isLoad = true;
        });
    },

    changeDisplayMode(displayType) {
      this.displayMode = displayType;
    },
    changePageSize(perPage) {
      this.page = 1;
      this.perPage = perPage;
    },
    changeOrderBy(sort) {
      this.sort = sort;
    },
    searchChange(val) {
      this.search = val;
      this.page = 1;
    },

    selectAll(isToggle) {
      if (this.selectedItems.length >= this.items.length) {
        if (isToggle) this.selectedItems = [];
      } else {
        this.selectedItems = this.items.map((x) => x.id);
      }
    },
    keymap(event) {
      switch (event.srcKey) {
        case "select":
          this.selectAll(false);
          break;
        case "undo":
          this.selectedItems = [];
          break;
      }
    },
    getIndex(value, arr, prop) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value) {
          return i;
        }
      }
      return -1;
    },
    toggleItem(event, itemId) {
      if (event.shiftKey && this.selectedItems.length > 0) {
        let itemsForToggle = this.items;
        var start = this.getIndex(itemId, itemsForToggle, "id");
        var end = this.getIndex(
          this.selectedItems[this.selectedItems.length - 1],
          itemsForToggle,
          "id"
        );
        itemsForToggle = itemsForToggle.slice(
          Math.min(start, end),
          Math.max(start, end) + 1
        );
        this.selectedItems.push(
          ...itemsForToggle.map((item) => {
            return item.id;
          })
        );
      } else {
        if (this.selectedItems.includes(itemId)) {
          this.selectedItems = this.selectedItems.filter((x) => x !== itemId);
        } else this.selectedItems.push(itemId);
      }
    },
    handleContextMenu(vnode) {
      if (!this.selectedItems.includes(vnode.key)) {
        this.selectedItems = [vnode.key];
      }
    },
    onContextMenuAction(action) {
      console.log(
        "context menu item clicked - " + action + ": ",
        this.selectedItems
      );
    },
    changePage(pageNum) {
      this.page = pageNum;
    },
  },
  computed: {
    isSelectedAll() {
      return this.selectedItems.length >= this.items.length;
    },
    isAnyItemSelected() {
      return (
        this.selectedItems.length > 0 &&
        this.selectedItems.length < this.items.length
      );
    },
    apiUrl() {
      return `${this.apiBase}?sort=${this.sort.column}&page=${this.page}&per_page=${this.perPage}&search=${this.search}`;
    },
  },
  watch: {
    search() {
      this.page = 1;
    },
    apiUrl() {
      this.loadItems();
    },
  },
  mounted() {
    this.loadItems();
    this.$refs.modalbasic.show();
  },
};
</script>
