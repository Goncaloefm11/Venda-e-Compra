moedasEscolhidas.forEach(function(moeda) {
    let novaMoeda;
    switch (moeda) {
        case "centimo1":
            novaMoeda = this.add.image(750 + 5 * count_cent1, 620 - 5 * count_cent1, "centimo1").setOrigin(0, 0);
            count_cent1++;
            break;
        case "centimos2":
            novaMoeda = this.add.image(680 + 5 * count_cent2, 620 - 5 * count_cent2, "centimos2").setOrigin(0, 0);
            count_cent2++;
            break;
        case "centimos5":
            novaMoeda = this.add.image(610 + 5 * count_cent5, 620 - 5 * count_cent5, "centimos5").setOrigin(0, 0);
            count_cent5++;
            break;
        case "centimos10":
            novaMoeda = this.add.image(540 + 5 * count_cent10, 620 - 5 * count_cent10, "centimos10").setOrigin(0, 0);
            count_cent10++;
            break;
        case "centimos20":
            novaMoeda = this.add.image(750 + 5 * count_cent20, 550 - 5 * count_cent20, "centimos20").setOrigin(0, 0);
            count_cent20++;
            break;
        case "centimos50":
            novaMoeda = this.add.image(680 + 5 * count_cent50, 550 - 5 * count_cent50, "centimos50").setOrigin(0, 0);
            count_cent50++;
            break;
        case "euro1":
            novaMoeda = this.add.image(610 + 5 * count_euro1, 550 - 5 * count_euro1, "euro1").setOrigin(0, 0);
            count_euro1++;
            break;
        case "euros2":
            novaMoeda = this.add.image(540 + 5 * count_euros2, 550 - 5 * count_euros2, "euros2").setOrigin(0, 0);
            count_euros2++;
            break;
        case "euros5_completos":
            novaMoeda = this.add.image(300 + 5 * count_euros5_completos, 575 - 5 * count_euros5_completos, "euros5_completos").setOrigin(0, 0);
            count_euros5_completos++;
            break;
        case "euros10_completos":
            novaMoeda = this.add.image(380 + 5 * count_euros10_completos, 580 - 5 * count_euros10_completos, "euros10_completos").setOrigin(0, 0);
            count_euros10_completos++;
            break;
        case "euros20_completos":
            novaMoeda = this.add.image(450 + 5 * count_euros20_completos, 575 - 5 * count_euros20_completos, "euros20_completos").setOrigin(0, 0);
            count_euros20_completos++;
            break;
