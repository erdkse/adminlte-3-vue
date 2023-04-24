import { __decorate, __extends } from "tslib";
import { Component, Prop, Vue } from 'vue-facing-decorator';
// import {MENU} from '@/modules/main/menu-sidebar/menu-sidebar';
import { PfDropdown } from '@profabric/vue-components';
var SidebarSearch = /** @class */ (function (_super) {
    __extends(SidebarSearch, _super);
    function SidebarSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.menu = [];
        _this.searchText = '';
        _this.foundMenuItems = [];
        _this.isDropdownOpen = false;
        return _this;
    }
    SidebarSearch.prototype.handleSearchTextChange = function (event) {
        this.foundMenuItems = [];
        if (event.target.value) {
            this.searchText = event.target.value;
            this.findMenuItems(this.menu);
            return;
        }
        else {
            this.searchText = '';
            this.isDropdownOpen = false;
        }
    };
    SidebarSearch.prototype.handleIconClick = function () {
        this.searchText = '';
        this.isDropdownOpen = false;
    };
    SidebarSearch.prototype.handleMenuItemClick = function () {
        this.searchText = '';
        this.isDropdownOpen = false;
    };
    SidebarSearch.prototype.findMenuItems = function (menu) {
        var _this = this;
        if (!this.searchText) {
            return;
        }
        menu.forEach(function (menuItem) {
            if (menuItem.name
                .toLowerCase()
                .includes(_this.searchText.toLowerCase()) &&
                menuItem.path) {
                _this.foundMenuItems.push(menuItem);
            }
            if (menuItem.children) {
                return _this.findMenuItems(menuItem.children);
            }
        });
        if (this.foundMenuItems.length > 0) {
            this.isDropdownOpen = true;
        }
    };
    SidebarSearch.prototype.boldString = function (str, substr) {
        return str.replaceAll(this.capitalizeFirstLetter(substr), "<strong class=\"text-light\">".concat(this.capitalizeFirstLetter(substr), "</strong>"));
    };
    SidebarSearch.prototype.capitalizeFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    __decorate([
        Prop()
    ], SidebarSearch.prototype, "menu", void 0);
    SidebarSearch = __decorate([
        Component({
            name: 'app-sidebar-search',
            components: {
                'pf-dropdown': PfDropdown
            }
        })
    ], SidebarSearch);
    return SidebarSearch;
}(Vue));
export default SidebarSearch;
//# sourceMappingURL=sidebar-search.js.map