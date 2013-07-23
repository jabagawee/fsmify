function assert(value, desc) {
    if (!value) {
        alert(desc);
    }
    return value;
}

function reset_fsm() {
    $("#txt").val("");
    $("#fsm").attr("src", "");
}

function fill_example() {
    $("#txt").val("Example Player\nTit for Tat\n2\nC, 0, 1\nD, 0, 1")
}

function regex_validate(states) {
    var pattern = /[CD], \d+, \d+/
    for (var i = 0; i < states.length; i++) {
        var state = states[i];
        if (!(pattern.test(state))) {
            return false;
        }
    }
    return true;
}

String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
};

function graphify(states) {
    var cht = "gv";
    var chl_a = ["digraph{rankdir=LR;",];
    var chl_b = ["node [shape=point] start; start -> n0;"];
    for (var i = 0; i < states.length; i++) {
        var state = states[i].split(", ");
        chl_a.push("node [shape=circle, label=\"{1}: {0}\", fontsize=14] n{1};".format(state[0], i));
        chl_b.push("n{0} -> n{1} [label=\"C\"];".format(i, state[1]));
        chl_b.push("n{0} -> n{1} [label=\"D\"];".format(i, state[2]));
    }
    chl_b.push("}");

    return chl_a.concat(chl_b).join('');
}

function process_fsm() {
    var txt = $("#txt").val();
    if (!txt) {
        reset_fsm();
        return;
    }

    var lines = txt.split("\n");
    var player_name = lines[0];
    var strategy_name = lines[1];
    var num_strategies = Number(lines[2]);
    var states = lines.slice(3);

    if (!assert(regex_validate(states), "One of your states is not valid.")) {
        $("#fsm").attr("src", "");
        return;
    }

    var chl = graphify(states);
    if (chl.length < 1900) {
        // small enough for GET request
        var graph_url = "https://chart.googleapis.com/chart?cht=gv&chl=" + encodeURI(chl);
        $("#fsm").attr("src", graph_url);
    } else {
        // too big for GET request - we need to make a POST request
        $("#chl").val(chl);
        $('#post_form').submit();
    }
}
