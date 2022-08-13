/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
chart.legend = new am4charts.Legend();

var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

networkSeries.data = [{
  name: 'Flora',
  fixed: true,
  x: am4core.percent(20),
  y: am4core.percent(50),
  children: [{
    name: 'Black Tea', value: 1
  }, {
    name: 'Floral',
    children: [{
      name: 'Chamomile', value: 1
    }, {
      name: 'Rose', value: 1
    }, {
      name: 'Jasmine', value: 1
    }]
  }]
}, {
  name: 'Fruity',
  fixed: true,
  x: am4core.percent(40),
  y: am4core.percent(50),
  children: [{
    name: 'Berry',
    children: [{
      name: 'Blackberry', value: 1
    }, {
      name: 'Raspberry', value: 1
    }, {
      name: 'Blueberry', value: 1
    }, {
      name: 'Strawberry', value: 1
    }]
  }, {
    name: 'Dried Fruit',
    children: [{
      name: 'Raisin', value: 1
    }, {
      name: 'Prune', value: 1
    }]
  }, {
    name: 'Other Fruit',
    children: [{
      name: 'Coconut', value: 1
    }, {
      name: 'Cherry', value: 1
    }, {
      name: 'Pomegranate', value: 1
    }, {
      name: 'Pineapple', value: 1
    }, {
      name: 'Grape', value: 1
    }, {
      name: 'Apple', value: 1
    }, {
      name: 'Peach', value: 1
    }, {
      name: 'Pear', value: 1
    }]
  }, {
    name: 'Citrus Fruit',
    children: [{
      name: 'Grapefruit', value: 1
    }, {
      name: 'Orange', value: 1
    }, {
      name: 'Lemon', value: 1
    }, {
      name: 'Lime', value: 1
    }]
  }]
}, {
  name: 'Other',
  fixed: true,
  x: am4core.percent(60),
  y: am4core.percent(50),
  children: [{
    name: 'Papery/Musty',
    children: [{
      name: 'Stale', value: 1
    }, {
      name: 'Cardboard', value: 1
    }, {
      name: 'Papery', value: 1
    }, {
      name: 'Woody', value: 1
    }, {
      name: 'Moldy/Damp', value: 1
    }, {
      name: 'Musty/Dusty', value: 1
    }, {
      name: 'Musty/Earthy', value: 1
    }, {
      name: 'Animalic', value: 1
    }, {
      name: 'Meaty Brothy', value: 1
    }, {
      name: 'Phenolic', value: 1
    }]
  }, {
    name: 'Chemical',
    children: [{
      name: 'Bitter', value: 1
    }, {
      name: 'Salty', value: 1
    }, {
      name: 'Medicinal', value: 1
    }, {
      name: 'Petroleum', value: 1
    }, {
      name: 'Skunky', value: 1
    }, {
      name: 'Rubber', value: 1
    }]
  }]
}, {
  name: 'Roasted',
  fixed: true,
  x: am4core.percent(80),
  y: am4core.percent(50),
  children: [{
    name: 'Pipe Tobacco', value: 1
  }, {
    name: 'Tobacco', value: 1
  }, {
    name: 'Burnt',
    children: [{
      name: 'Acrid', value: 1
    }, {
      name: 'Ashy', value: 1
    }, {
      name: 'Smoky', value: 1
    }, {
      name: 'Brown, Roast', value: 1
    }]
  }, {
    name: 'Cereal',
    children: [{
      name: 'Grain', value: 1
    }, {
      name: 'Malt', value: 1
    }]
  }]

}];

networkSeries.dataFields.linkWith = "linkWith";
networkSeries.dataFields.name = "name";
networkSeries.dataFields.id = "name";
networkSeries.dataFields.value = "value";
networkSeries.dataFields.children = "children";
networkSeries.dataFields.fixed = "fixed";

networkSeries.nodes.template.propertyFields.x = "x";
networkSeries.nodes.template.propertyFields.y = "y";

networkSeries.nodes.template.tooltipText = "{name}";
networkSeries.nodes.template.fillOpacity = 1;

networkSeries.nodes.template.label.text = "{name}"
networkSeries.fontSize = 8;
networkSeries.maxLevels = 3;
networkSeries.nodes.template.label.hideOversized = true;
networkSeries.nodes.template.label.truncate = true;
