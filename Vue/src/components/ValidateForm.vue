<template>
    <form class="validateForm" @submit.prevent="checkForm">
        <div class="paymentInfo">
            <p class="subtitle">Информация об оплате:</p>
            <div class="paymentInfo__account--margin">
                <label for="account" class="subtitle">Номер счёта:</label>
                <input
                    type="text"
                    maxlength="12"
                    id="account"
                    class="paymentInfo__accountInput paymentInfo__accountInput--margin"
                    :class="$v.form.accountNumber.$error ? 'isInvalid' : ''"
                    v-model="form.accountNumber"
                />
                <span
                    v-if="
                        ($v.form.accountNumber.$dirty &&
                            !$v.form.accountNumber.required) ||
                        ($v.form.accountNumber.$dirty &&
                            !$v.form.accountNumber.minLength) ||
                        ($v.form.accountNumber.$dirty &&
                            !$v.form.accountNumber.numeric)
                    "
                    class="invalidFeedback"
                >
                    Номер счета не менее 12 цифр
                </span>
            </div>
            <div>
                <label for="sum" class="subtitle">Сумма платежа:</label>
                <input
                    type="text"
                    id="sum"
                    class="paymentInfo__sumInput paymentInfo__sumInput--margin"
                    :class="$v.form.sum.$error ? 'isInvalid' : ''"
                    v-model="form.sum"
                /><span class="paymentInfo__sumCurrency">руб.</span>
                <span
                    v-if="
                        ($v.form.sum.$dirty && !$v.form.sum.required) ||
                        ($v.form.sum.$dirty && !$v.form.sum.minValue)
                    "
                    class="invalidFeedback"
                >
                    Сумма перевода не менее 1 рубля
                </span>
            </div>
        </div>
        <div class="bankInfo">
            <h3 class="bankInfo__title bankInfo__title--margin">
                Данные банковской карты
            </h3>
            <div class="bankInfo__front">
                <div class="bankInfo__front__cardNumber--wrapper">
                    <label for="cardNumber" class="subtitle blockSettings"
                        >Номер карты</label
                    >
                    <input
                        type="text"
                        maxlength="4"
                        id="cardNumber"
                        class="bankInfo__front__cardNumber"
                        :class="
                            $v.form.cardNumber.slot1.$error ? 'isInvalid' : ''
                        "
                        v-model="form.cardNumber.slot1"
                    />
                    <input
                        type="text"
                        maxlength="4"
                        class="bankInfo__front__cardNumber"
                        :class="
                            $v.form.cardNumber.slot2.$error ? 'isInvalid' : ''
                        "
                        v-model="form.cardNumber.slot2"
                    />
                    <input
                        type="text"
                        maxlength="4"
                        class="bankInfo__front__cardNumber"
                        :class="
                            $v.form.cardNumber.slot3.$error ? 'isInvalid' : ''
                        "
                        v-model="form.cardNumber.slot3"
                    />
                    <input
                        type="text"
                        maxlength="4"
                        class="bankInfo__front__cardNumber"
                        :class="
                            $v.form.cardNumber.slot4.$error ? 'isInvalid' : ''
                        "
                        v-model="form.cardNumber.slot4"
                    />
                </div>
                <span
                    v-if="
                        ($v.form.cardNumber.slot1.$dirty &&
                            !$v.form.cardNumber.slot1.required) ||
                        ($v.form.cardNumber.slot1.$dirty &&
                            !$v.form.cardNumber.slot1.minLength) ||
                        ($v.form.cardNumber.slot1.$dirty &&
                            !$v.form.cardNumber.slot1.numeric) ||
                        ($v.form.cardNumber.slot2.$dirty &&
                            !$v.form.cardNumber.slot2.required) ||
                        ($v.form.cardNumber.slot2.$dirty &&
                            !$v.form.cardNumber.slot2.minLength) ||
                        ($v.form.cardNumber.slot2.$dirty &&
                            !$v.form.cardNumber.slot2.numeric) ||
                        ($v.form.cardNumber.slot3.$dirty &&
                            !$v.form.cardNumber.slot3.required) ||
                        ($v.form.cardNumber.slot3.$dirty &&
                            !$v.form.cardNumber.slot3.minLength) ||
                        ($v.form.cardNumber.slot3.$dirty &&
                            !$v.form.cardNumber.slot3.numeric) ||
                        ($v.form.cardNumber.slot4.$dirty &&
                            !$v.form.cardNumber.slot4.required) ||
                        ($v.form.cardNumber.slot4.$dirty &&
                            !$v.form.cardNumber.slot4.minLength) ||
                        ($v.form.cardNumber.slot4.$dirty &&
                            !$v.form.cardNumber.slot4.numeric)
                    "
                    class="invalidFeedback"
                >
                    Номер карты должен состоять из 16 цифр
                </span>

                <div class="bankInfo__front__cardPeriod--wrapper">
                    <label for="cardPeriod" class="subtitle blockSettings"
                        >Срок действия</label
                    >
                    <select
                        id="cardPeriod"
                        v-model="form.month"
                        class="bankInfo__front__cardPeriod"
                    >
                        <option
                            v-for="(month, index) in months"
                            :value="month.value"
                            :key="index"
                        >
                            {{ month.label }}
                        </option>
                    </select>
                    <select
                        id="cardPeriod"
                        v-model="form.year"
                        class="bankInfo__front__cardPeriod"
                    >
                        <option
                            v-for="(year, index) in years"
                            :value="year.value"
                            :key="index"
                        >
                            {{ year.label }}
                        </option>
                    </select>
                </div>
                <span
                    v-if="
                        ($v.form.owner.$dirty && !$v.form.owner.required) ||
                        ($v.form.owner.$dirty && !$v.form.owner.correctOwner)
                    "
                    class="invalidFeedback"
                >
                    Допустимы только заглавные латинские буквы
                </span>
                <input
                    type="text"
                    placeholder="Держатель карты"
                    class="bankInfo__front__cardOwner"
                    :class="$v.form.owner.$error ? 'isInvalid' : ''"
                    v-model="form.owner"
                />
            </div>
            <div class="bankInfo__back">
                <div class="bankInfo__back__magnetLine"></div>
                <div class="bankInfo__back__code--wrapper">
                    <label for="cvvCode" class="subtitle">Код CVV2/CVC2</label>
                    <input
                        type="text"
                        maxlength="3"
                        id="cvvCode"
                        class="bankInfo__back__code"
                        :class="$v.form.code.$error ? 'isInvalid' : ''"
                        v-model="form.code"
                    />
                    <img
                        src="@/assets/question.png"
                        alt="question"
                        class="bankInfo__back__pic"
                    />
                    <span
                        v-if="
                            ($v.form.code.$dirty && !$v.form.code.required) ||
                            ($v.form.code.$dirty && !$v.form.code.minLength) ||
                            ($v.form.code.$dirty && !$v.form.code.numeric)
                        "
                        class="invalidFeedback"
                    >
                        Код должен состоять из 3 цифр
                    </span>
                    <p class="bankInfo__back__addon">
                        Код CCV2/CVC2 указан на&nbsp;задней стороне карты
                    </p>
                </div>
            </div>
        </div>
        <input
            type="submit"
            value="Оплатить"
            class="submitButton submitButton--margin"
        />
    </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
    required,
    minLength,
    minValue,
    numeric,
    helpers,
} from "vuelidate/lib/validators";
const correctOwner = helpers.regex("correctOwner", /^[A-Z]{2,}\s[A-Z]{2,}$/);

export default {
    mixins: [validationMixin],
    name: "ValidateForm",
    data() {
        return {
            form: {
                accountNumber: "",
                sum: "",
                cardNumber: {
                    slot1: "",
                    slot2: "",
                    slot3: "",
                    slot4: "",
                },
                month: "01",
                year: "2021",
                owner: "",
                code: "",
            },
            months: [
                {
                    label: "01",
                    value: "01",
                },
                {
                    label: "02",
                    value: "02",
                },
                {
                    label: "03",
                    value: "03",
                },
                {
                    label: "04",
                    value: "04",
                },
                {
                    label: "05",
                    value: "05",
                },
                {
                    label: "06",
                    value: "06",
                },
                {
                    label: "07",
                    value: "07",
                },
                {
                    label: "08",
                    value: "08",
                },
                {
                    label: "09",
                    value: "09",
                },
                {
                    label: "10",
                    value: "10",
                },
                {
                    label: "11",
                    value: "11",
                },
                {
                    label: "12",
                    value: "12",
                },
            ],
            years: [
                {
                    label: "2021",
                    value: "2021",
                },
                {
                    label: "2022",
                    value: "2022",
                },
                {
                    label: "2023",
                    value: "2023",
                },
                {
                    label: "2024",
                    value: "2024",
                },
                {
                    label: "2025",
                    value: "2025",
                },
                {
                    label: "2026",
                    value: "2026",
                },
            ],
        };
    },
    validations: {
        form: {
            accountNumber: {
                required,
                minLength: minLength(12),
                numeric,
            },
            sum: { required, minValue: minValue(1) },
            cardNumber: {
                slot1: {
                    required,
                    minLength: minLength(4),
                    numeric,
                },
                slot2: {
                    required,
                    minLength: minLength(4),
                    numeric,
                },
                slot3: {
                    required,
                    minLength: minLength(4),
                    numeric,
                },
                slot4: {
                    required,
                    minLength: minLength(4),
                    numeric,
                },
            },
            owner: { required, correctOwner },
            code: {
                required,
                minLength: minLength(3),
                numeric,
            },
        },
    },
    methods: {
        createDate() {
            let date = new Date();
            let options = {
                year: "numeric",
                month: "long",
                day: "numeric",
            };
            return date.toLocaleString("ru", options);
        },
        checkForm() {
            this.$v.form.$touch();
            if (!this.$v.form.$error) {
                this.$store.commit("addPayment", {
                    accountNumber: this.form.accountNumber,
                    sum: this.form.sum,
                    cardNumber: this.form.cardNumber.slot4,
                    owner: this.form.owner,
                    date: this.createDate(),
                });
                console.log(this.$store.state.accounts);
                if (!this.$store.state.validationPassed) {
                    this.$store.commit("changeValidationPassed");
                }
                this.$router.push({ name: "SuccessfulPayment" });
            }
        },
    },
};
</script>

<style scoped lang="scss">
.validateForm {
    width: 100%;
    min-height: 65%;
    background-color: #fff;
    padding: 50px 30px 40px 20px;
    box-sizing: border-box;
}

.subtitle {
    width: 100%;
    color: rgb(100, 97, 97);
    font: 600 13px "Arial", sans-serif;
    margin: 0 0 2px;
}

.blockSettings {
    display: block;
}

.paymentInfo {
    width: 100%;
    min-height: 100px;
}

.paymentInfo__account--margin {
    margin: 15px 0 10px;
}

.paymentInfo__accountInput {
    width: 100px;
    height: 12px;
    font: 200 12px "Arial", sans-serif;
    &.paymentInfo__accountInput--margin {
        margin-left: 60px;
    }
}

.paymentInfo__sumInput {
    width: 50px;
    height: 12px;
    font: 200 12px "Arial", sans-serif;
    &.paymentInfo__sumInput--margin {
        margin-left: 41px;
    }
}

.paymentInfo__sumCurrency {
    font: 200 14px "Arial", sans-serif;
    margin-left: 2px;
}

.bankInfo {
    position: relative;
    width: 100%;
    min-height: 245px;
}

.bankInfo__title {
    font: 600 19px "Arial", sans-serif;
    &.bankInfo__title--margin {
        margin: 10px 0 10px;
    }
}

.bankInfo__front {
    position: absolute;
    z-index: 2;
    width: 65%;
    min-height: 175px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border: 1px solid rgb(100, 97, 97);
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
}

.bankInfo__front__cardNumber--wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 2px 0 0;
}

.bankInfo__front__cardNumber {
    width: 50px;
    height: 30px;
    text-align: center;
    font: 400 16px/35px "Arial", sans-serif;
    box-sizing: border-box;
}

.bankInfo__front__cardPeriod--wrapper {
    width: 100%;
    margin: 0;
}

.bankInfo__front__cardPeriod {
    height: 30px;
    font: 400 16px/30px "Arial", sans-serif;
    padding-left: 2px;
    &:last-child {
        margin-left: 5px;
    }
}

.bankInfo__front__cardOwner {
    width: 100%;
    height: 30px;
    font: 400 14px/35px "Arial", sans-serif;
    padding-left: 6px;
    box-sizing: border-box;
}

.bankInfo__back {
    position: absolute;
    z-index: 1;
    right: 0px;
    top: 53px;
    width: 65%;
    min-height: 175px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: #fff;
    border: 1px solid rgb(100, 97, 97);
    border-radius: 5px;
    padding: 25px 0 10px;
    box-sizing: border-box;
}

.bankInfo__back__magnetLine {
    width: 100%;
    min-height: 35px;
    background-color: black;
    opacity: 0.7;
}

.bankInfo__back__code--wrapper {
    width: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 15px 0 0;
}

.bankInfo__back__code {
    width: 100%;
    height: 30px;
    text-align: center;
    font: 400 16px/30px "Arial", sans-serif;
    padding-right: 20px;
    box-sizing: border-box;
}

.bankInfo__back__pic {
    position: absolute;
    top: 102px;
    right: 20px;
    width: 20px;
    &:hover + .bankInfo__back__addon {
        display: block;
    }
}

.bankInfo__back__addon {
    display: none;
    color: rgb(100, 97, 97);
    border-radius: 5px;
    background-color: rgb(245, 225, 148);
    font: 200 8px "Arial", sans-serif;
    padding: 3px;
    margin: 2px 0 0 0;
    &:after {
        content: "";
        position: absolute;
        right: 20px;
        bottom: 41px;
        border: 10px solid transparent;
        border-bottom: 10px solid rgb(245, 225, 148);
    }
}

.submitButton {
    border: none;
    border-radius: 30px;
    background-color: rgba(7, 87, 179, 0.836);
    box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
    color: #fff;
    font: 400 14px "Arial", sans-serif;
    padding: 10px 26px;
    box-sizing: border-box;
    cursor: pointer;
    transition: ease-out 300ms background-color;
    &:hover {
        background-color: rgba(37, 110, 158, 0.836);
    }
    &:active {
        background-color: rgba(7, 87, 179, 0.836);
    }
    &--margin {
        margin-top: 55px;
    }
}

.isInvalid {
    border: 2px solid red;
    border-radius: 2px;
}

.invalidFeedback {
    color: red;
    font: 200 10px "Arial", sans-serif;
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
    .validateForm {
        padding-top: 40px;
    }

    .submitButton--margin {
        margin-top: 37px;
    }
}
</style>