package com.chart;

import android.graphics.Color;
import java.util.ArrayList;
import java.util.Arrays;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableArray;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.annotations.ReactProp;

import com.github.mikephil.charting.charts.LineChart;
import com.github.mikephil.charting.components.XAxis;
import com.github.mikephil.charting.components.YAxis;
import com.github.mikephil.charting.data.Entry;
import com.github.mikephil.charting.data.LineData;
import com.github.mikephil.charting.data.LineDataSet;

public class MPLineChartManager extends SimpleViewManager<LineChart> {

    public static final String REACT_CLASS = "MPLineChart";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected LineChart createViewInstance(ThemedReactContext reactContext) {
        LineChart chart=new LineChart(reactContext);
        return  chart;
    }

    private void initGraph(LineChart chart){
        chart.setBackgroundColor(Color.WHITE);

        // data has AxisDependency.LEFT
        YAxis left = chart.getAxisLeft();
        //left.setDrawLabels(false); // no axis labels
        //left.setDrawAxisLine(false); // no axis line
        left.setDrawGridLines(false); // no grid lines
        //left.setDrawZeroLine(true); // draw a zero line
        chart.getAxisRight().setEnabled(false); // no right axis

        XAxis xAxis = chart.getXAxis();
        xAxis.setPosition(XAxis.XAxisPosition.BOTTOM);
        chart.getXAxis().setDrawGridLines(false); // no horizontal lines

        //chart.setDescription("This is my first graph");
        //chart.setBorderColor(Color.BLACK);
        //chart.setBorderWidth(5);
    }


    // {XValues:[],
    //  YValues:[
    //      {Data:[],
    //       Label:""
    //      },
    //      {}
    //     ]
    // }
    @ReactProp(name="data")
    public void setData(LineChart chart,ReadableMap rm){

        // Name of the points under the x-axel
        ArrayList<String> xVals = new ArrayList<>(Arrays.asList(new String[]{"Må", "Ti", "On", "To", "Fr", "Lö", "Sö"}));

        ReadableArray ra = rm.getArray("yValues");
        LineData chartData = new LineData(xVals);

        // YOU CAN DRAW MOST THAN ONE LINE
        for(int i = 0; i<ra.size(); i++){
            // GET THE DATA OF THE FIRST LINE
            ReadableMap map = ra.getMap(i);
            ReadableArray data = map.getArray("data");

            ArrayList<Entry> entries=new ArrayList<Entry>();

            for (int j=0;j<data.size();j++){
                entries.add(new Entry((float)data.getDouble(j),j));
            }

            // The line through the points
            LineDataSet lineDataSet = new LineDataSet(entries,"Temp °C");
            //styleLineDataSet(lineDataSet);

            // ADD THE LINE TO THE GRAPH
            chartData.addDataSet(lineDataSet);
        }

        initGraph(chart);
        chart.setData(chartData);
        chart.invalidate();
    }

    /*private void styleLineDataSet(LineDataset lineDataset){
        lineDataSet.setAxisDependency(YAxis.AxisDependency.LEFT);
        lineDataSet.setCircleColor(Color.parseColor("#046e8f"));
        lineDataSet.setCircleRadius(6);
        lineDataSet.setCircleColorHole(Color.parseColor("#046e8f"));
        lineDataSet.setColor(Color.parseColor("#046e8f"));
        lineDataSet.setDrawFilled(true);
        lineDataSet.setLineWidth(5);
    }*/
}