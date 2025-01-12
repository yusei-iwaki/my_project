import * as Vue from "vue";
import { ref } from "vue";

const application = {
    setup() {
        const name = ref(""); // 追加
        const validateResult = ref(""); // 追加

        const title = ref("vue test title.");

        let buttonClick = function () {
            title.value = "value update.";
        };

        //追加
        let validate = function () {
            let isKana = name.value.match(/^[ぁ-んー　]*$/);
            validateResult.value = isKana ? "正常" : "ひらがな以外が入力されています。";
        };

        return {
            title,
            buttonClick,

            name, // 追加
            validateResult, // 追加
            validate, // 追加
        };
    },
};

try {
    let mainElement = document.getElementsByTagName("main")[0];
    Vue.createApp(application).mount(mainElement);
} catch (e) {}