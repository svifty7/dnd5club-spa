import Helpers from '@/common/utils/Helpers';

// eslint-disable-next-line import/prefer-default-export
export const CapitalizeFirst = {
    created(el) {
        // eslint-disable-next-line no-param-reassign
        el.innerText = Helpers.capitalizeFirstLetter(el.innerText)
    }
}
