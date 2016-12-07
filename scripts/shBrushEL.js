/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'#BEGINALERT #BEGINCMTRY #BEGINCMTRYORALERT #END #EVENTS '+
		 '#Region #EndRegion A AB_AddCell AB_GetCellChar AB_GetCellColor '+
		 'AB_GetCellDate AB_GetCellTime AB_GetCellValue AB_GetNumCells AB_GetZoneHigh AB_GetZoneLow '+
		 'AsType AB_ColorIntervals AB_High AB_LetterIntervals AB_Low AB_ModeCount '+
		 'AB_RemoveCell AB_RowCalc AB_RowHeight AB_SetActiveCell AB_SetRowHeight AB_SetZone '+
		 'Abort Above AbsValue ActivityData AddToMovieChain Ago '+
		 'Alert AlertEnabled All An And Arctangent '+
		 'Array Array_Compare Array_Copy Array_GetMaxIndex Array_GetType Array_SetMaxIndex '+
		 'Array_SetValRange Array_Sort Array_Sum ARRAYSIZE ARRAYSTARTADDR ASK '+
		 'AskDate AskDateEX AskExch AskSize AskTime AskTimeEX '+
		 'ASSET ASSETTYPE ASSETVOLATILITY At At$ AtCommentaryBar '+
		 'AUTOSESSION AvgBarsEvenTrade AvgBarsLosTrade AvgBarsWinTrade AvgEntryPrice AvgList '+
		 'Bar BarInterval Bars BarDateTime BarsSinceEntry BarsSinceExit '+
		 'BarStatus BarType BaseCurrency Based Begin Below '+
		 'Beta Beta_Down Beta_Up BID BidDate BidDateEX '+
		 'BidDirectionNNM BidExch BidSize BidTime BidTimeEX BigPointValue '+
		 'Black BlockNumber Blue Book_Val_Per_Share BOOL BoxSize '+
		 'Break BreakEvenStopFloor BreakPoint Buy BuyToCover By '+
		 'BYTE C CALL CALLCOUNT CALLITMCOUNT CallOpenInt '+
		 'CALLOTMCOUNT CALLSERIESCOUNT CALLSTRIKECOUNT CallVolume Cancel Catch '+
		 'Category Ceiling CHAR CheckAlert CheckCommentary ClearDebug '+
		 'CLEARPRINTLOG Close COARSE Commentary CommentaryCL CommentaryEnabled '+
		 'Commission CommodityNumber ComputerDateTime Condition Const Continue '+
		 'Contract ContractMonth ContractProfit Contracts ContractSize ContractYear '+
		 'Cosine COST Cotangent CreateLeg Cross Current '+
		 'Current_Ratio CurrentBar CurrentContracts CurrentDate CurrentEntries CurrentOpenInt '+
		 'CurrentShares CurrentTime CustomerID Cyan D DailyClose '+
		 'DailyHigh DailyLimit DailyLow DailyOpen DailyTrades DailyTradesDN '+
		 'DailyTradesUC DailyTradesUP DailyVolume DailyVolumeDN DailyVolumeUC DailyVolumeUp '+
		 'DarkBlue DarkBrown DarkCyan DarkGray DarkGreen DarkMagenta '+
		 'DarkRed Data Data1-50 DataCompression DataInUnion Date '+
		 'DateTimeToString DateToJulian DateToString Day DayFromDateTime DayOfMonth '+
		 'DayOfWeek DayOfWeekFromDateTime Days Default DefineCustField DEFINEDLLFUNC '+
		 'DeliveryMonth DeliveryYear DELTA Description Dividend Dividend_Yield '+
		 'DividendCount DividendDate DividendFreq DividendTime DivYield Does '+
		 'DOUBLE DoubleQuote DownTicks DownTo DWORD EasyLanguageVersion '+
		 'EL_DateStr ELDateToDateTime Else ELTimeToDateTime EncodeDate EncodeTime '+
		 'End Entry EntryDate EntryDateTime EntryPrice EntryTime '+
		 'EPS EPS_PChng_Y_Ago EPS_PChng_YTD EPSCount EPSDate EPSEstimate '+
		 'EPSTime ExchListed ExecOffset ExitDate ExitDateTime ExitPrice '+
		 'ExitTime ExpDate ExpDateEX ExpirationDate EXPIRATIONSTYLE ExpStyle '+
		 'ExpValue EXTERNAL False File FileAppend FileDelete '+
		 'Finally FINE FirstNoticeDate FirstNoticeDateEX FIRSTOPTION FLOAT '+
		 'Floor FND FNDEX For FormatDate FormatTime '+
		 'FracPortion FreeCshFlwPerShare Friday From FUTURE FUTURETYPE '+
		 'G_Rate_EPS_NY G_Rate_Nt_In_NY G_Rate_P_Net_Inc GAMMA GetAccount GetAccountID '+
		 'GetAccountLotSize GetAccountStatus GetAccountType GetAllOrNone GetAppInfo GetBackgroundColor '+
		 'GetBDAccountEquity GetBDAccountNetWorth GetBDCashBalance GetBDDayTradingBuyingPower GetBDMarginRequirement GetBDOvernightBuyingPower '+
		 'GetBDTradeEquity GetBuyMinusSellPlus GetBValue GetCDRomDrive GetCountry GetCurrency '+
		 'GetDiscretion GetExchangeName GetFundData GetFundDataAsBoolean GetFundDataAsString GetFundPeriodEndDate '+
		 'GetFundPostDate GetGValue GetLastFundDataError GetNonDisplay GetNOW GetNumAccounts '+
		 'GetNumPositions GetOpenOrderInitialMargin GetPeg GetPlotBGColor GetPlotColor GetPlotWidth '+
		 'GetPositionAveragePrice GetPositionMarketValue GetPositionOpenPL GetPositionQuantity GetPositionSymbol GetPositionTotalCost '+
		 'GetRTAccountEquity GetRTAccountNetWorth GetRTCashBalance GetRTCostOfPositions GetRTDaytradingBuyingPower GetRTInitialMargin '+
		 'GetRTMaintMargin GetRTMarginRequirement GetRTOvernightBuyingPower GetRTPurchasingPower GetRTRealizedPL GetRTTradeEquity '+
		 'GetRTUnrealizedPL GetRValue GetScreenName GetShaveImprove GetShowOnly GetStrategyName '+
		 'GetSubscriberOnly GetSymbolName GetSystemName GetTodaysRTTradeEquity GetUnclearedDeposits Gr_Rate_P_EPS '+
		 'GradientColor Green GrossLoss GrossProfit H High '+
		 'High52Wk Higher HistFundExists HoursFromDateTime I I_AvgEntryPrice '+
		 'I_ClosedEquity I_CurrentContracts I_CurrentShares I_MarketPosition I_OpenEquity IEasyLanguageObject '+
		 'If In IncludeSignal IncludeSystem IncMonth InfiniteLoopDetect '+
		 'INITIALMARGIN Input Inputs InsideAsk InsideBid Inst_Percent_Held '+
		 'InStr INT IntervalType IntPortion IntraBarOrderGeneration IntrabarPersist '+
		 'Is IsFundDataAvailable IsValidFundField IVolatility JulianToDate L '+
		 'LargestLosTrade LargestWinTrade Last Last_Split_Date Last_Split_Fact LastCalcDateTime '+
		 'LastCalcJDate LastCalcMMTime LastTradingDate LEAPYear LeftSide LeftStr '+
		 'LEG LegacyColorToRGB LegacyColorValue LEGTYPE LightGray Limit '+
		 'LiveDate LiveTime Log LONG LongRollAdj LossCF '+
		 'Low Low52Wk Lower LowerStr LPBOOL LPBYTE '+
		 'LPDOUBLE LPDWORD LPFLOAT LPINT LPLONG LPSTR '+
		 'LPWORD LTD LTDEX Magenta MakeNewMovieRef Margin '+
		 'Market MarketPosition MaxBarsBack MaxBarsForward MaxConsecLosers MaxConsecWinners '+
		 'MaxContractProfit MaxContracts MaxContractsHeld MaxEntries MAXGAIN MaxIDDrawDown '+
		 'MaxList MaxList2 MAXLOSS MaxPositionLoss MaxPositionProfit MaxShares '+
		 'MaxSharesHeld MEDIUM Method MessageLog MidStr MillisecondsFromDateTime '+
		 'MinList MinList2 MinMove MinutesFromDateTime MIVIterationCount MIVONASK '+
		 'MIVONBID MIVONCLOSE MIVONRAWASK MIVONRAWBID MIVonRawMid Moc '+
		 'Mod MODELPOSITION MODELPRICE MODELRATE MODELRATE2 MODELVOLATILITY '+
		 'Monday MoneyMgtStopAmt Month MonthFromDateTime MULTIPLE MYSELF '+
		 'Neg Net_Profit_Margin NetProfit NewLine NewsCount Next '+
		 'NoPlot Not NthMaxList NthMinList Null Numeric '+
		 'NumericArray NumericArrayRef NumericRef NumericSeries NumericSimple NumEvenTrades '+
		 'NUMFUTURES NUMLEGS NumLosTrades NUMOPTIONS NumToStr NumWinTrades '+
		 'O ObjectRef ObjectSimple Of On Once '+
		 'Open OpenInt OpenPositionProfit OPTION OPTIONTYPE Or '+
		 'Out Over Override Pager_DefaultName Pager_Send PERatio '+
		 'PercentProfit Place PlayMovieChain PlaySound Plot Plot '+
		 'plot1  plot2  plot3  plot4  plot5  plot6 '+
		'plot7  plot8  plot9  plot10  plot11  plot12 '+
		'plot13  plot14  plot15  plot16  plot17  plot18'+
		'plot19  plot20  plot21  plot22  plot23  plot24'+
		'plot25  plot26  plot27  plot28  plot29  plot30'+
		'plot31  plot32  plot33  plot34  plot35  plot36'+
		'plot37  plot38  plot39  plot40  plot41  plot42'+
		'plot43  plot44  plot45  plot46  plot47  plot48'+
		'plot49  plot50  plot51  plot52  plot53  plot54'+
		'plot55  plot56  plot57  plot58  plot59  plot60'+
		'plot61  plot62  plot63  plot64  plot65  plot66'+
		'plot67  plot68  plot69  plot70  plot71  plot72'+
		'plot73  plot74  plot75  plot76  plot77  plot78'+
		'plot79  plot80  plot81  plot82  plot83  plot84'+
		'plot85  plot86  plot87  plot88  plot89  plot90'+
		'plot91  plot92  plot93  plot94  plot95  plot96'+
		'plot97  plot98  plot99'+
		 'PlotPaintBar PlotPB PM_GetCellValue PM_GetNumColumns PM_GetRowHeight PM_High '+
		 'PM_Low PM_SetCellValue PM_SetHigh PM_SetLow PM_SetNumColumns PM_SetRowHeight '+
		 'Pob Point POINTER PointValue Pos POSITION '+
		 'POSITIONID PositionProfit POSITIONSTATUS Power PrevClose PrevOpenInt '+
		 'PrevVolume Price_To_Book PriceScale Print Printer Product '+
		 'PROFIT ProfitCF ProfitTargetStop PROTECTIVE PUT PUTCOUNT '+
		 'PUTITMCOUNT PutOpenInt PUTOTMCOUNT PUTSERIESCOUNT PUTSTRIKECOUNT PutVolume '+
		 'q_Ask q_AskExchange q_AskSize q_Bid q_BidExchange q_BidSize '+
		 'q_BigPointValue q_CallOpenInt q_CallVolume q_Category q_Close q_DailyLimit '+
		 'q_Date q_DateEX q_DateLastAsk q_DateLastAskEX q_DateLastBid q_DateLastBidEX '+
		 'q_DateLastTrade q_DateLastTradeEX q_DownVolume q_ExchangeListed q_ExpirationDate q_ExpirationDateEX '+
		 'q_High q_IVolatility q_Last q_LastTradingDate q_LastTradingDateEX q_Low '+
		 'q_Margin q_MinMove q_MinutesDelayed q_NewsCount q_NumOptions q_Offer '+
		 'q_Open q_OpenInterest q_OptionType q_PreviousClose q_PreviousDate q_PreviousOpenInterest '+
		 'q_PreviousTime q_PreviousVolume q_PrevTotalVolume q_PutOpenInt q_PutVolume q_StrikePrice '+
		 'q_Time q_TimeEX q_TimeLastAsk q_TimeLastAskEX q_TimeLastBid q_TimeLastBidEX '+
		 'q_TimeLastTrade q_TimeLastTradeEX q_TotalVolume q_TradeVolume q_UnchangedVolume q_UpVolume '+
		 'q_Yield Quick_Ratio RaiseRunTimeError Random RAWASK RAWBID '+
		 'Reciprocal Red REGULARSESSION Repeat Ret_On_Avg_Equity Return '+
		 'RevSize RGB RGBToLegacyColor RHO RightSide RightStr '+
		 'Round RunCommand SameTickOpt Saturday Screen SecondsFromDateTime '+
		 'Self Sell SellShort SERIESCOUNT Sess1EndTime Sess1FirstBarTime '+
		 'Sess1StartTime Sess2EndTime Sess2FirstBarTime Sess2StartTime SessionCount SessionCountMS '+
		 'SessionEndDay SessionEndDayMS SessionEndTime SessionEndTimeMS SessionStartDay SessionStartDayMS '+
		 'SessionStartTime SessionStartTimeMS SetAllOrNone SetBreakEven SetBuyMinusSellPlus SetDiscretion '+
		 'SetDollarTrailing SetExitOnClose SetFPCompareAccuracy SetNonDisplay SetNOW SetPeg '+
		 'SetPercentTrailing SetPlotBGColor SetPlotColor SetPlotType SetPlotWidth SetProfitTarget '+
		 'SetRouteName SetShaveImprove SetShowOnly SetStopContract SetStopLoss SetStopPosition '+
		 'SetStopShare SetSubscriberOnly Settlement SGA_Exp_By_NetSales Share Shares '+
		 'SharesOut Short ShortRollAdj SICCode Sign Sine '+
		 'Skip Slippage SnapFundExists Spaces Square SquareRoot '+
		 'StartDate Stateless stAutoSession StockSplit StockSplitCount StockSplitDate '+
		 'StockSplitTime Stop stRegularSession STRIKE STRIKECOUNT STRIKEITMCOUNT '+
		 'STRIKEOTCOUNT String StringArray StringArrayRef StringRef StringSeries '+
		 'StringSimple StringToDate StringToDateTime StringToTime StrLen StrToNum '+
		 'SumList Sunday Switch Symbol SymbolName SymbolRoot '+
		 'T Tangent TARGET TARGETTYPE Text Text_Delete '+
		 'Text_GetActive Text_GetColor Text_GetDate Text_GetFirst Text_GetHStyle Text_GetNext '+
		 'Text_GetString Text_GetTime Text_GetValue Text_GetVStyle Text_New Text_SetColor '+
		 'Text_SetLocation Text_SetString Text_SetStyle Than The Then '+
		 'THEORETICALGROSSIN THEORETICALGROSSOUT THEORETICALVALUE THETA This Throw '+
		 'Thursday Ticks TICKTYPE Time TimeToString TL_Delete '+
		 'TL_GetActive TL_GetAlert TL_GetBeginDate TL_GetBeginTime TL_GetBeginVal TL_GetColor '+
		 'TL_GetEndDate TL_GetEndTime TL_GetEndVal TL_GetExtLeft TL_GetExtRight TL_GetFirst '+
		 'TL_GetNext TL_GetSize TL_GetStyle TL_GetValue TL_New TL_SetAlert '+
		 'TL_SetBegin TL_SetColor TL_SetEnd TL_SetExtLeft TL_SetExtRight TL_SetSize '+
		 'TL_SetStyle To Today Tomorrow Tool_Black Tool_Blue '+
		 'Tool_Cyan Tool_DarkBlue Tool_DarkBrown Tool_DarkCyan Tool_DarkGray Tool_DarkGreen '+
		 'Tool_DarkMagenta Tool_DarkRed Tool_DarkYellow Tool_Dashed Tool_Dashed2 Tool_Dashed3 '+
		 'Tool_Dotted Tool_Green Tool_LightGray Tool_Magenta Tool_Red Tool_Solid '+
		 'Tool_White Tool_Yellow Total TotalBarsEvenTrades TotalBarsLosTrades TotalBarsWinTrades '+
		 'TotalTrades TradeDate TradeDateEX TradeDirectionSeries TradeExch TradeTime '+
		 'TradeTimeEX TradeVolume TradingDaysLeft TrailingStopAmt TrailingStopFloor TrailingStopPct '+
		 'True TrueFalse TrueFalseArray TrueFalseArrayRef TrueFalseRef TrueFalseSeries '+
		 'TrueFalseSimple Try Try-Catch-Finally TtlDbt_By_NetAssts Tuesday Under '+
		 'Underlying UnionSess1EndTime UnionSess1FirstBar UnionSess1StartTime UnionSess2EndTime UnionSess2FirstBar '+
		 'UnionSess2StartTime Units UNSIGNED Until UpperStr UpTicks '+
		 'Using V Value Variable VARSIZE VARSTARTADDR '+
		 'VEGA VOID Volume VSBCOMMENTARY VWAP Was '+
		 'Wednesday While White WORD Xor Year '+
		 'YearFromDateTime Yellow Yesterday var vars';
		var functions = '@Delta @Gamma @Theta @Vega AB_AddCellRange '+
		'AB_AverageCells AB_AveragePrice AB_CellCount AB_Median AB_Mode AB_NextColor '+
		'AB_NextLabel AB_RowHeightCalc AB_StdDev AbsoluteBreadth AccumDist AccumSwingIndex '+
		'AdaptiveMovAvg AdvanceDeclineDiff AdvanceDeclineRatio ADX ADXCustom ADXR '+
		'ADXRCustom ArmsIndex Aroon AroonDown AroonOsc AroonUp '+
		'At Average AverageArray AverageFC AvgDeviation AvgDeviationArray '+
		'AvgPrice AvgTrueRange BarAnnualization BarNumber BearishDivergence BjerkStensCall '+
		'BjerkStensPhi BlackModel BlackScholes BollingerBand BullishDivergence C_3WhSolds_3BlkCrows '+
		'C_AbandonedBaby C_AbandonedBabyBottom C_AbandonedBabyTop C_AdvanceBlock C_BullEng_BearEng C_BullHar_BearHar '+
		'C_Doji C_Hammer_HangingMan C_HaramiCross C_InvertHammer C_Kicking C_Marubozu '+
		'C_MarubozuBlackOpening C_MarubozuWhiteOpening C_MeetingLines C_MornDoji_EveDoji C_MornStar_EveStar C_PierceLine_DkCloud '+
		'C_ShootingStar C_TasukiGap C_TasukiGapDownside C_TasukiGapUpside C_ThreeMethods C_ThreeMethodsFalling '+
		'C_ThreeMethodsRising C_ThreeStarsInTheSouth C_TriStar CalcDate CalcTime CCI '+
		'ChaikinMoneyFlow ChaikinOsc ChaikinVolatility CloseD CloseM CloseSession '+
		'CloseW CloseY CMO CoefficientR CoefficientRArray CoefficientREasy '+
		'Combination CopyArray CopyColumn Correlation CorrelationArray CountIF '+
		'Covar CovarArray CovarEasy CSI Cum CurrentAsk '+
		'CurrentBid CurrentSession CurrentSessionMS DailyLosers DailyWinners DaysToExpiration '+
		'Detrend DevSqrd DevSqrdArray DirMovement Divergence DMI '+
		'DMICustom DMIMinus DMIMinusCustom DMIPlus DMIPlusCustom EaseOfMovement '+
		'ELDate ELDate_Consol ELDateToString EntriesToday ExitsToday ExtremePriceRatio '+
		'Extremes ExtremesArray ExtremesFC Factorial FAMA FastD '+
		'FastDCustom FastDCustomOrig FastHighestBar FastK FastKCustom FastKCustomEasy '+
		'FastKCustomOrig FastLowestBar FindBar FirstSession FirstSessionMS Fisher '+
		'FisherINV FundBoolean FundDate FundPeriodEndDate FundSetup FundString '+
		'FundValue FundValueTTM GCD GenerateStrike GetRGBValues HarmonicMean '+
		'HarmonicMeanArray HeapPush HeapPush2D HeapSift HeapSift2D HighD '+
		'Highest HighestArray HighestBar HighestFC HighM HighSession '+
		'HighW HighY HMA HPI IFF IFFLogic '+
		'IFFString ImpliedVolatility InfoBox InsideBar Intrinsic KeltnerChannel '+
		'Kurtosis KurtosisArray KurtosisOpt LastBarOnChart LastBarOnChartEx LastCalcDate '+
		'LastCalcTime LastDayOfMonth LastHour LastSession LastSessionMS Leader '+
		'LimitIfTouchedOrder LimitOrder LinearReg LinearRegAngle LinearRegAngleFC LinearRegFC '+
		'LinearRegSlope LinearRegSlopeFC LinearRegValue LinearRegValueFC LinRegArray LinRegArray2 '+
		'LinRegForecastArray LinRegInterceptArray LinRegSlopeArray LogXY LowD Lowest '+
		'LowestArray LowestBar LowestFC LowM LowSession LowW '+
		'LowY LRO LWAccDis MACD MAMA MamaBase '+
		'MarketIfTouchedOrder MarketOrder MassIndex McClellanOsc Median MedianArray '+
		'MedianPrice MFI MidPoint MinutesIntoWeek MinutesToTime Mode '+
		'ModeArray Momentum MoneyFlow MRO MyColors MyPrice '+
		'Next3rdFriday NormCumDensity NormCumDensityArray NormDensity NormDensityArray NormGradientColor '+
		'NormSCDensity NRBar NthExtremes NthExtremesArray NthHighest NthHighestArray '+
		'NthHighestBar NthLowest NthLowestArray NthLowestBar NumericRank NumericRankArray '+
		'NumUnits NVI OBV OHLCPeriodsAgo OHLCVCollection OneAlert '+
		'OpenD OpenM OpenSession OpenW OpenY OptionComplex '+
		'OptionPrice OS_AnnualDividend OS_Binomial OS_CheckProx OS_DaysToExp OS_DaysToFarExp '+
		'OS_DaysToNearExp OS_DivsBetweenDates OS_FindCall OS_FindPut OS_FindSeries OS_FracDaysToExp '+
		'OS_GrossIn OS_GrossOut OS_Intrinsic OS_MaxNumStrikes OutsideBar Parabolic '+
		'ParabolicCustom ParabolicSAR PartSessionCountDay Pennant PercentChange Percentile '+
		'PercentileArray PercentR PercentRank PercentRankArray Permutation PFE '+
		'Pivot PivotHighVS PivotHighVSBar PivotLowVS PivotLowVSBar PivotReversalGen '+
		'PlaceOrder PositionProfitCustom PriceOscillator PriceVolTrend ProbAbove ProbBelow '+
		'ProbBetween PVI Quartile QuartileArray QuoteFieldValue Range '+
		'RangeLeader RateOfChange RecentOcc Round2Fraction RS_Average RS_BarsPerDay '+
		'RS_DailyDataArray RS_Extremes RS_PriceExtension RS_ReversalPatterns RS_TrueExtremes RSI '+
		'RSquare RSquareArray RunCommandOnLastBar SecondsIntoWeek SessionCountDay SessionFirstBarTime '+
		'ShowLongStop ShowShortStop Skew SkewArray SkewOpt SlowD '+
		'SlowDCustom SlowDCustomOrig SlowK SlowKCustom SlowKCustomOrig SmoothedAverage '+
		'Sort2DArray SortArray SortHeap2DArray SortHeapArray StandardDev StandardDevAnnual '+
		'StandardDevArray Standardize StandardizeArray StdDev StdDevS StdError '+
		'StdErrorArray StdErrorArray2 Stochastic StochasticExp StopLimitOrder StopMarketOrder '+
		'StrColorToNum Summation SummationArray SummationFC SummationIf SummationRecArray '+
		'SummationSqrArray SwingHigh SwingHighBar SwingIndex SwingLow SwingLowBar '+
		'Text_Exist Text_Float TimeSeriesForecast TimeToMinutes TL_Exist TLAngle '+
		'TLAngleEasy TLSlope TLSlopeEasy TLValue TLValueEasy TrailingStopOrder '+
		'TriAverage TriAverage_Gen TrimMean TrimMeanArray TRIX TrueHigh '+
		'TrueLow TrueRange TrueRangeCustom TypicalPrice UlcerIndex UltimateOscillator '+
		'VarianceArray VariancePS VHF Volatility VolatilityStdDev VolumeDay '+
		'VolumeMonth VolumeOsc VolumeROC VolumeSession VolumeWeek VolumeYear '+
		'WAverage WeightedClose XAverage XAverageOrig ZProb';
		
		function fixComments(match, regexInfo)
		{
			var css = (match[0].indexOf("///") == 0)
				? 'color1'
				: 'comments'
				;
			
			return [new SyntaxHighlighter.Match(match[0], match.index, css)];
		}

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	func : fixComments },		// one line comments
			{ regex: /\{.*\}/g   ,		                    css: 'comments' },			// multiline comments
			{ regex: /@"(?:[^"]|"")*"/g,								css: 'string' },			// @-quoted strings
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// strings
			{ regex: /^\s*#.*/gm,										css: 'preprocessor' },		// preprocessor tags like #region and #endregion
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),		css: 'keyword' },			// EL keyword
			{ regex: new RegExp(this.getKeywords(functions), 'gmi'),		css: 'functions' },			// EL functions
			{ regex: /\bpartial(?=\s+(?:class|interface|struct)\b)/g,	css: 'keyword' },			// contextual keyword: 'partial'
			{ regex: /\byield(?=\s+(?:return|break)\b)/g,				css: 'keyword' }			// contextual keyword: 'yield'
			];
		
		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['EL', 'EasyLanguage', 'EasyLanguage'];

	SyntaxHighlighter.brushes.EasyLanguage = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

