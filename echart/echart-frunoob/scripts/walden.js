(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('walden', {
        "color": [
            "#e896e7",
            "#6be6c1",
            "#c4ebad",
            "#96dee8",
            "#3fb1e3",
            "#f9a340",
            "#a0a7e6"
        ],
        "backgroundColor": "rgba(0,0,0,0)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#75d0f7"
            },
            "subtextStyle": {
                "color": "#c1ebf3"
            },
            top:20
        },
        "line": {
            "itemStyle": {
                "borderWidth": "2"
            },
            "lineStyle": {
                "width": "3"
            },
            "symbolSize": "7",
            "symbol": "emptyRoundRect",
            "smooth": true
        },
        "radar": {
            "itemStyle": {
                "borderWidth": "2"
            },
            "lineStyle": {
                "width": "3"
            },
            "symbolSize": "7",
            "symbol": "emptyRoundRect",
            "smooth": true
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": "1",
                "barBorderColor": "#000000"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": "1",
                "borderColor": "#000000"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": "1",
                "borderColor": "#000000"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": "1",
                "borderColor": "#000000"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": "1",
                "borderColor": "#000000"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": "1",
                "borderColor": "#000000"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": "1",
                "borderColor": "#000000"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": "1",
                "borderColor": "#000000"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#e6a0d2",
                "color0": "transparent",
                "borderColor": "#e6a0d2",
                "borderColor0": "#3fb1e3",
                "borderWidth": "2"
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": "1",
                "borderColor": "#000000"
            },
            "lineStyle": {
                "width": "1",
                "color": "#ffffff"
            },
            "symbolSize": "7",
            "symbol": "emptyRoundRect",
            "smooth": true,
            "color": [
                "#3fb1e3",
                "#6be6c1",
                "#626c91",
                "#a0a7e6",
                "#c4ebad",
                "#96dee8"
            ],
            "label": {
                "color": "#ffffff"
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#eeeeee",
                    "borderColor": "#aaaaaa",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(63,177,227,0.25)",
                    "borderColor": "#3fb1e3",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#3fb1e3"
                    }
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#eeeeee",
                    "borderColor": "#aaaaaa",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(63,177,227,0.25)",
                    "borderColor": "#3fb1e3",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#3fb1e3"
                    }
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#64eeff"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#087d8d"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#ffffff"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "rgba(53,170,170,0.54)"
                    ]
                }
            },
            "splitArea": {
                "show": true,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#64eeff"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#087d8d"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#ffffff"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "rgba(53,170,170,0.54)"
                    ]
                }
            },
            "splitArea": {
                "show": true,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#64eeff"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#087d8d"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#ffffff"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "rgba(53,170,170,0.54)"
                    ]
                }
            },
            "splitArea": {
                "show": true,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#64eeff"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#087d8d"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#ffffff"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "rgba(53,170,170,0.54)"
                    ]
                }
            },
            "splitArea": {
                "show": true,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#ffffff"
                },
                "emphasis": {
                    "borderColor": "#97ffeb"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#ffffff"
            },
           "show" : false
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "rgba(67,255,102,0.87)",
                    "width": "2"
                },
                "crossStyle": {
                    "color": "rgba(67,255,102,0.87)",
                    "width": "2"
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#52edf8",
                "width": "2"
            },
            "itemStyle": {
                "normal": {
                    "color": "#06f1cf",
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#3fb1e3"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#00ffe0",
                    "borderColor": "#00ff9a",
                    "borderWidth": "1"
                },
                "emphasis": {
                    "color": "#00ffe0",
                    "borderColor": "#00ff9a",
                    "borderWidth": "1"
                }
            },
            "checkpointStyle": {
                "color": "#3fb1e3",
                "borderColor": "rgba(99,239,229,0.15)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#ffffff"
                    }
                }
            }
        },
        "visualMap": {
            "color": [
                "#2a99c9",
                "#60dfa6",
                "#6c7fea"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(255,255,255,0)",
            "dataBackgroundColor": "rgba(222,222,222,1)",
            "fillerColor": "rgba(114,230,212,0.25)",
            "handleColor": "#cccccc",
            "handleSize": "100%",
            "textStyle": {
                "color": "rgba(255,255,255,0.85)"
            }
        },
        "markPoint": {
            "label": {
                "color": "#ffffff"
            },
            "emphasis": {
                "label": {
                    "color": "#ffffff"
                }
            }
        }
    });
}));
