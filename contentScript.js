var printErrorNode = function (node) {
    if (node.parentNode === null) {
        console.log("null" + node);
    } else if (node.parentNode === undefined) {
        console.log("undefined" + node);
    } else if (node.parentNode) {
        console.log(node.parentNode);
    }
};

var removeNode = function (node) {
    if (!node) return;

    //printErrorNode(node);
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    } else {
        document.body.removeChild(node);
    }
};

var removeNodeById = function (nodeId) {
    var node = document.getElementById(nodeId);
    removeNode(node);
};

var removeNodesByClass = function (classId) {
    var nodes = document.getElementsByClassName(classId);
    for (var i = 0; i < nodes.length; i++) {
        removeNode(nodes[i]);
    }
};

var removeNodesByTag = function (tagId) {
    var nodes = document.getElementsByTagName(tagId);
    for (var i = 0; i < nodes.length; i++) {
        removeNode(nodes[i]);
    }
};

var removeNodesInIframe = function (id) {
    var iframes = document.getElementsByTagName("iframe");
    for (var i = 0; i < iframes.length; i++) {
        var iframe = iframes[i];
        if (iframe && iframe.id
            && iframe.id.toString().indexOf(id) > -1) {
            removeNode(iframe);
        }
    }
}

if (window.self !== window.top) {
    document.body.style.zoom = "0.8";

    // oxford
    removeNodeById('ox-header');
    removeNodeById('searchbar');
    removeNodesByClass('wotd-box');
    removeNodeById('ox-footer');

    removeNodeById('ad_contentslot_1');
    removeNodeById('ad_contentslot_2');
    removeNodeById('ad_topslot_a');

    // longman
    removeNodesByClass('header');
    removeNodesByClass('footer');
    removeNodesByClass('right_box');
    removeNodesByClass('share_panel');
    removeNodeById('iotd');
    removeNodeById('ad_rightslot'); 
    removeNodeById('wotd');
    removeNodesByClass('am-default');

    removeNodeById('ad_leftslot_container');
    removeNodeById('ad_topslot');
    removeNodeById('adunit');
    removeNodesInIframe('google_ads_iframe');
    removeNodesInIframe('ad_contentslot_3');

    // cambridge
    removeNodesByTag('header');

    var nodes = document.getElementsByClassName('cc');
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].style.paddingTop = 0;
    }
    //removeNodesByClass('hoh');
    //removeNodeById('footer');
    //removeNodesByClass('lbt');
    //removeNodesByClass('bh');
    //removeNodesByClass('lmb-25');
    //removeNodesByClass('hbss');

    //removeNodeById('ad_houseslot_a');
}
