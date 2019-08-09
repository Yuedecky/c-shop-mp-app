Component({
    properties: {
        showBottom: Boolean,
        goods: Object,
        dictList: Array,
        versionList: Array,
        colorList: Array,
        memoryList: Array,
        selectedMemoryName: {
            type: String,
            observer: function (val) {
                this.setData({
                    selectedMemory: val
                })
            }
        },
        selectedColorName: {
            type: String,
            observer: function (val) {
                this.setData({
                    selectedColor: val
                })
            }
        },
        selectedVersionName: {
            type: String,
            observer: function (val) {
                this.setData({
                    selectedVersion: val
                })
            }
        }
    },
    data: {
        selectedMemory: '',
        selectedColor: '',
        selectedVersion: ''
    },
    attached() {

    },
    methods: {

        onClosePopup() {
            this.triggerEvent('close', {}, {})
        },

        clickVersion(e) {
            const vName = e.detail.name;
            const dict = this.properties.dictList;
            const colorList = this.properties.colorList;
            const selectedMemory = this.data.selectedMemory;
            const selectedColor = this.data.selectedColor;
            const memoryList = this.data.memoryList;
            const arr = dict.filter(it => {
                return it.goodsVersion == vName
            })
            if (arr != null && arr.length > 0) {
                const colorList2 = arr.map(it => {
                    return it.goodsColor
                })
                const memoryList2 = arr.map(it => {
                    return it.goodsMemory
                })
                colorList.forEach(it => {
                    let colorIndx = colorList2.findIndex((val) => val == it.name)
                    it.disabled = !(colorIndx > -1);
                })
                memoryList.forEach(it => {
                    let memoryIdx = memoryList2.findIndex((val) => val == it.name)
                    it.disabled = !(memoryIdx > -1)
                })
                const pRet = arr.filter(it => {
                    return it.goodsMemory == selectedMemory && it.goodsColor == selectedColor
                })
                if (pRet != null && pRet.length > 0) {
                    const goods = this.data.goods;
                    goods.originPrice = pRet[0].originPrice;
                    this.setData({
                        goods
                    })
                }
                this.setData({
                    colorList,
                    memoryList
                })
            }
            this.setData({
                selectedVersion: vName
            })
        },

        clickColor(e) {
            const cName = e.detail.name;
            const dict = this.properties.dictList;
            const versionList = this.properties.versionList;
            const memoryList = this.properties.memoryList;
            const selectedVersion = this.data.selectedVersion;
            const selectedMemory = this.data.selectedMemory;
            const arr = dict.filter(it => {
                return it.goodsColor == cName
            })
            if (arr != null && arr.length > 0) {
                const versionList2 = arr.map(it => {
                    return it.goodsVersion
                })
                const memoryList2 = arr.map(it => {
                    return it.goodsMemory
                })
                versionList.forEach(it => {
                    let versionIdx = versionList2.findIndex((val) => val == it.name)
                    it.disabled = !(versionIdx > -1);
                })
                memoryList.forEach(it => {
                    let memoryIdx = memoryList2.findIndex((val) => val == it.name)
                    it.disabled = !(memoryIdx > -1)
                })

                const pRet = arr.filter(it => {
                    return it.goodsMemory == selectedMemory && it.goodsVersion == selectedVersion
                })
                if (pRet != null && pRet.length > 0) {
                    const goods = this.data.goods;
                    goods.originPrice = pRet[0].originPrice;
                    this.setData({
                        goods
                    })
                }
                this.setData({
                    versionList,
                    memoryList
                })
            }
            this.setData({
                selectedColor: cName
            })
        },

        clickMemory(e) {
            const mName = e.detail.name;
            const dict = this.properties.dictList;
            const versionList = this.properties.versionList;
            const colorList = this.properties.colorList;
            const selectedVersion = this.data.selectedVersion;
            const selectedColor = this.data.selectedColor;
            const arr = dict.filter(it => {
                return it.goodsMemory == mName
            })
            if (arr != null && arr.length > 0) {
                const versionList2 = arr.map(it => {
                    return it.goodsVersion
                })
                const colorList2 = arr.map(it => {
                    return it.goodsColor
                })
                versionList.forEach(it => {
                    let versionIdx = versionList2.findIndex((val) => val == it.name)
                    it.disabled = !(versionIdx > -1);
                })
                colorList.forEach(it => {
                    let colorIndx = colorList2.findIndex((val) => val == it.name)
                    it.disabled = !(colorIndx > -1)
                })
                const pRet = arr.filter(it => {
                    return it.goodsColor == selectedColor && it.goodsVersion == selectedVersion
                })
                if (pRet != null && pRet.length > 0) {
                    const goods = this.data.goods;
                    goods.originPrice = pRet[0].originPrice;
                    this.setData({
                        goods
                    })
                }
                this.setData({
                    versionList,
                    colorList
                })
            }
            this.setData({
                selectedMemory: mName
            })
        },

        makeSure() {
            const selectedMemory = this.data.selectedMemory;
            const selectedColor = this.data.selectedColor;
            const selectedVersion = this.data.selectedVersion;
            const dict = this.properties.dictList;
            const ret = dict.filter(it => {
                return it.goodsColor == selectedColor && it.goodsMemory == selectedMemory && it.goodsVersion == selectedVersion
            })
            if (ret != null && ret.length > 0) {
                this.setData({
                    showBottom: false,
                })
                //todo ret可能有多个
                this.triggerEvent('selected', { id: ret[0].id, selectedColor, selectedMemory, selectedVersion }, {})
            }
        },


        /**
         * 更改数量
         */
        onNumChange() {

        },

    }
})