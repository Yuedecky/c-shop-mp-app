Page({
    data: {
        keys: [
            "极差",
            "较差",
            "一般",
            "不错",
            "很棒"
        ]
    },
    onLoad() {

    },
    onChange(e) {
        console.log(e.detail)
    }
})