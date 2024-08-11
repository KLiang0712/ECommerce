/* Cloud 1: amCharts4 */
am4core.useTheme(am4themes_animated);

var chart = am4core.create("tagcloud1", am4plugins_wordCloud.WordCloud);
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

series.text =
  "KoryLiang is a ComputerScience DoubleMajor 2016 & journey using Python joining TECHIS for WebDevelopment. CDNs studies built in 2019 while a ComputerScience student. DataScience & WebDevelopment for a ComputerScience DoubleMajor to KoryLiang enjoys building shop businesses plus his own personal website. ComputerScience DoubleMajor KoryLiang studies WebDevelopment FrontEnd HTML5 & CSS3 plus BackEnd JavaScript, Python & CDNs. WebDevelopment studies by KoryLiang are by TECHIS in 2022. By TECHIS ComputerScience DoubleMajor KoryLiang studies WebDevelopment CDNs, DataScience, Python, & ArtificialIntelligence. ComputerScience DoubleMajor KoryLiang studies WebDevelopment & DataScience. DataScience DoubleMajor KoryLiang studies CDNs, ArtificialIntelligence & DataScience using languages like Python. ComputerScience DoubleMajor KoryLiang primarily programs in Python. WebDevelopment DoubleMajor KoryLiang studies FrontEnd & BackEnd using FrontEnd HTML5 & CSS3 & BackEnd JavaScript. KoryLiang does WebDevelopment FrontEnd using HTML5 & CSS3 plus JavaScript BackEnd. TECHIS ComputerScience DoubleMajor for KoryLiang uses CDNs, Python, FrontEnd with HTML5 & CSS3 plus JavaScript BackEnd using WebDevelopment languages. ComputerScience DoubleMajor KoryLiang summarizes ComputerScience courses enjoying teaching Python basics, ArtificialIntelligence, DataScience, & WebDevelopment. KoryLiang enjoys teaching WebDevelopment pairing CDNs, HTML5 & CSS3 with JavaScript. ArtificialIntelligence projects by KoryLiang use Python, DataScience, & CDNs. ArtificialIntelligence WebDevelopment plus Python equals HTML5 built FrontEnd CSS3 & BackEnd JavaScript CDNs.";


/* Cloud 5: ZingChart */
var myConfig = {
  type: 'wordcloud',
  options: {
    text: 'We the people of the United States, in order to form a more perfect union, establish establish establish establish establish establish establish establish justice, insure domestic tranquility, provide for the common defense, promote the general welfare, and secure the blessings of liberty to ourselves and our posterity, do ordain and establish this Constitution for the United States of America.',

    minLength: 4,
    ignore: ['establish','this'],
    maxItems: 50,
    aspect: 'spiral',
    rotate: true,

    colorType: 'palette',
    palette: ['#D32F2F','#1976D2','#9E9E9E','#E53935','#1E88E5','#7E57C2','#F44336','#2196F3','#A1887F'],

    style: {
      fontFamily: 'Merriweather',

      hoverState: {
        backgroundColor: '#1976D2',
        borderColor: 'none',
        borderRadius: 3,
        fontColor: 'white'
      },
      tooltip: {
        text: 'We the people of the United States, in order to form a more perfect union, establish justice, insure domestic tranquility, provide for the common defense, promote the general welfare, and secure the blessings of liberty to ourselves and our posterity, do ordain and establish this Constitution for the United States of America.',
        visible: true,

        alpha: 0.9,
        backgroundColor: '#D32F2F',
        borderColor: 'none',
        borderRadius: 3,
        fontColor: 'white',
        fontFamily: 'Georgia',
        padding: 5,
        textAlpha: 1,
        width: 400,
        wrapText: true
      }
    }
  }
};

zingchart.render({ 
  id: 'cloud5', 
  data: myConfig, 
  height: '100%', 
  width: '100%' 
});
