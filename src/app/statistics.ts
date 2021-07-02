export class Statistic {
    public cases: number;
    public deaths: number;
    public recovered: number;
    public countyName: string;
    public abbreviation: string;
    public flageImg: string;
    public chartData: any;

    constructor(cases, deaths, recovered, countyName: string, abbreviation: string, flageImg: string, chartData: any){
        this.cases = cases;
        this.deaths = deaths;
        this.recovered = recovered;
        this.countyName = countyName;
        this.abbreviation = abbreviation,
        this.flageImg = flageImg;
        this.chartData = chartData;
    }
}