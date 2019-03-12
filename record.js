function validate() {
    var bIsvalidate = true;

    if ($("#selAllyId").val() == "") {
        alert('聯盟為空值');
        bIsvalidate = false;
    }
    else if ($("#selTmaId").val() == "") {
        alert('主隊伍為空值');
        bIsvalidate = false;
    }
    else if ($("#selTmbId").val() == "") {
        alert('客隊伍為空值');
        bIsvalidate = false;
    }
    else {
    // 20190226- 棒球投手，改成如果左右隊都沒有輸入投手也要可以新增賽事
    //      -> 但其中一邊有輸入，另一邊投手為必填欄位
        if (($("#selPraId").val() != "" && $("#selPrbId").val() == "") ||
            ($("#selPraId").val() == "" && $("#selPrbId").val() != "")){
            alert('投手資料錯誤');
            bIsvalidate = false;
        }
    }
    return bIsvalidate;
}
