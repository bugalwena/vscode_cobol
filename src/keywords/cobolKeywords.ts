
const cobolKeywords: string[] = [
	"accept",
	"access",
	"add",
	"address",
	"advancing",
	"after",
	"all",
	"alphabet",
	"alphabetic-lower",
	"alphabetic-upper",
	"alphabetic",
	"alphanumeric-edited",
	"alphanumeric",
	"also",
	"alter",
	"alternate",
	"and",
	"any",
	"apply",
	"are",
	"area",
	"areas",
	"ascending",
	"assign",
	"at",
	"author",
	"b-and",
	"b-exor",
	"b-not",
	"b-or",
	"b-xor",
	"background-color",
	"background-colour",
	"basis",
	"before",
	"beginning",
	"binary",
	"blank",
	"block",
	"bottom",
	"by",
	"call",
	"cancel",
	"cbl",
	"cd",
	"cells",
	"cf",
	"ch",
	"chain",
	"chaining",
	"character",
	"characters",
	"class-id",
	"class",
	"clock-units",
	"close",
	"code-set",
	"code",
	"collating",
	"column",
	"com-reg",
	"comma",
	"common",
	"communication",
	"comp-0",
	"comp-2",
	"comp-3",
	"comp-4",
	"comp-5",
	"comp-6",
	"comp",
	"computational-1",
	"computational-2",
	"computational-3",
	"computational-4",
	"computational-5",
	"computational-6",
	"computational",
	"compute",
	"configuration",
	"constraints",
	"contains",
	"content",
	"continue",
	"control",
	"controls",
	"converting",
	"copy",
	"corr",
	"corresponding",
	"count",
	"currency",
	"data",
	"date-compiled",
	"date-written",
	"day-of-week",
	"day",
	"dbcs",
	"de",
	"debug-contents",
	"debug-item",
	"debug-line",
	"debug-name",
	"debug-sub-1",
	"debug-sub-2",
	"debug-sub-3",
	"debugging",
	"decimal-point",
	"declaratives",
	"declare",
	"delete",
	"delimited",
	"delimiter",
	"depending",
	"descending",
	"destination",
	"detail",
	"display-1",
	"display",
	"divide",
	"division",
	"down",
	"duplicates",
	"dynamic",
	"egcs",
	"egi",
	"eject",
	"else",
	"emi",
	"enable",
	"end-add",
	"end-call",
	"end-chain",
	"end-compute",
	"end-delete",
	"end-display",
	"end-divide",
	"end-evaluate",
	"end-exec",
	"end-if",
	"end-invoke",
	"end-multiply",
	"end-of-page",
	"end-perform",
	"end-read",
	"end-receive",
	"end-return",
	"end-rewrite",
	"end-search",
	"end-start",
	"end-string",
	"end-subtract",
	"end-unstring",
	"end-write",
	"end",
	"enum-id",
	"ending",
	"enter",
	"entry",
	"environment-name",
	"environment-value",
	"environment",
	"eop",
	"equal",
	"equals",
	"error",
	"esi",
	"evaluate",
	"every",
	"exception",
	"exec",
	"exit",
	"extend",
	"external",
	"foreground-color",
	"foreground-colour",
	"factory",
	"false",
	"fd",
	"file-control",
	"file",
	"filler",
	"final",
	"first",
	"footing",
	"for",
	"from",
	"function",
	"generate",
	"giving",
	"global",
	"go",
	"goback",
	"greater",
	"group",
	"heading",
	"high-value",
	"high-values",
	"i-o-control",
	"i-o",
	"id",
	"identification",
	"if",
	"in",
	"index",
	"indexed",
	"indicate",
	"inherits",
	"initial",
	"interface-id",
	"initialize",
	"initiate",
	"input-output",
	"input",
	"insert",
	"inspect",
	"installation",
	"into",
	"invalid",
	"invoke",
	"is",
	"just",
	"justified",
	"kanjikey",
	"kept",
	"label",
	"last",
	"leading",
	"left",
	"length",
	"less",
	"limit",
	"limits",
	"linage-counter",
	"linage",
	"line-counter",
	"line",
	"lines",
	"linkage",
	"local-storage",
	"lock",
	"low-value",
	"low-values",
	"memory",
	"merge",
	"message",
	"metaclass",
	"method-id",
	"method",
	"mode",
	"modules",
	"more-labels",
	"move",
	"multiple",
	"multiply",
	"native_binary",
	"native",
	"negative",
	"next",
	"no",
	"not",
	"null",
	"nulls",
	"number",
	"numeric-edited",
	"numeric",
	"object-computer",
	"object",
	"occurs",
	"of",
	"off",
	"omitted",
	"on",
	"open",
	"optional",
	"or",
	"order",
	"organization",
	"other",
	"output",
	"overflow",
	"override",
	"packed-decimal",
	"padding",
	"page-counter",
	"page",
	"password",
	"perform",
	"pf",
	"ph",
	"pic",
	"picture",
	"plus",
	"pointer",
	"position",
	"positive",
	"printing",
	"procedure-pointer",
	"procedure",
	"procedures",
	"proceed",
	"processing",
	"program-id",
	"program",
	"purge",
	"queue",
	"quote",
	"quotes",
	"random",
	"rd",
	"read",
	"ready",
	"receive",
	"record",
	"recording",
	"records",
	"recursive",
	"redefines",
	"redefines",
	"reel",
	"reference",
	"references",
	"relative",
	"release",
	"reload",
	"remainder",
	"remarks",
	"removal",
	"renames",
	"replace",
	"replacing",
	"report",
	"reporting",
	"reports",
	"repository",
	"rerun",
	"reserve",
	"reset",
	"return-code",
	"return",
	"returning",
	"reversed",
	"rewind",
	"rewrite",
	"rf",
	"rh",
	"right",
	"rounded",
	"run",
	"same",
	"sd",
	"search",
	"section",
	"security",
	"segment-limit",
	"segment",
	"select",
	"self",
	"send",
	"sentence",
	"separate",
	"sequence",
	"sequential",
	"service",
	"set",
	"shift-in",
	"shift-out",
	"sign",
	"size",
	"skip1",
	"skip2",
	"skip3",
	"sort-control",
	"sort-core-size",
	"sort-file-size",
	"sort-merge",
	"sort-message",
	"sort-mode-size",
	"sort-return",
	"sort",
	"source-computer",
	"source",
	"space",
	"spaces",
	"special-names",
	"standard-1",
	"standard-2",
	"standard",
	"start",
	"static",
	"status",
	"stop",
	"string",
	"sub-queue-1",
	"sub-queue-2",
	"sub-queue-3",
	"subtract",
	"sum",
	"super",
	"suppress",
	"symbolic",
	"sync",
	"synchronized",
	"table",
	"tally",
	"tallying",
	"tape",
	"terminal",
	"terminate",
	"test",
	"text",
	"than",
	"then",
	"thread-local",
	"through",
	"thru",
	"time",
	"times",
	"title",
	"to",
	"top",
	"trace",
	"trailing",
	"true",
	"type",
	"unit",
	"unstring",
	"until",
	"up",
	"upon",
	"usage",
	"use",
	"using",
	"value",
	"values",
	"varying",
	"when-compiled",
	"when",
	"with",
	"words",
	"working-storage",
	"write-only",
	"write",
	"zero",
	"zeroes",
	"zeros"
];

const acuKeywords: string[] = [
	"3-d",
	"active-x-control",
	"activex-res",
	"acuactivexcontrol",
	"alignment",
	"assembly-name",
	"auto-minimize",
	"auto-resize",
	"bind",
	"box",
	"cancel-button",
	"cell",
	"cells",
	"center",
	"centered-headings",
	"century-date",
	"century-day",
	"chart",
	"cline",
	"clines",
	"clsid",
	"color",
	"column-headings",
	"compression",
	"csize",
	"cursor-frame-width",
	"cycle",
	"data-columns",
	"default-font",
	"default-interface",
	"default-source",
	"destroy",
	"display-columns",
	"divider-color",
	"drag-color",
	"end-modify",
	"end-move",
	"end-use",
	"end-wait",
	"engraved",
	"entry-field",
	"erase",
	"event",
	"file-path",
	"file-prefix",
	"frame",
	"grid",
	"heading-color",
	"heading-divider-color",
	"height",
	"help-id",
	"icon",
	"id",
	"identified",
	"independent",
	"initial-state",
	"inquire",
	"label-offset",
	"label",
	"large-font",
	"layout-data",
	"link",
	"list-box",
	"lower",
	"manual",
	"mass-update",
	"menu",
	"message",
	"modal",
	"modeless",
	"modify",
	"newline",
	"no-tab",
	"num-rows",
	"numeric-fill",
	"only",
	"overlapped",
	"page-layout-screen",
	"paragraph",
	"pixel",
	"pixels",
	"pop-up",
	"previous",
	"primary-interface",
	"priority",
	"push-button",
	"radio-button",
	"record-data",
	"record-position",
	"report-composer",
	"resizeable",
	"resource",
	"scroll",
	"self-act",
	"separation",
	"strong-name",
	"style",
	"system",
	"thread",
	"threads",
	"tiled-headings",
	"title-bar",
	"title",
	"tool-bar",
	"transaction-status",
	"unsorted",
	"upper",
	"user-gray",
	"vpadding",
	"vscroll",
	"wide",
	"width",
	"wrap"
];

const cobolStorageKeywords: string[] = [
	"binary-char",
	"binary-double",
	"binary-long",
	"binary-short",
	"boolean",
	"character",
	"comp-1",
	"comp-2",
	"comp-3",
	"comp-4",
	"comp-5",
	"comp-n",
	"comp-x",
	"comp",
	"computational-1",
	"computational-2",
	"computational-3",
	"computational-4",
	"computational-5",
	"computational-n",
	"computational-x",
	"computational",
	"conditional-value",
	"constant",
	"decimal",
	"external",
	"float-long",
	"float-short",
	"low-value",
	"low-values",
	"occurs",
	"pic",
	"picture",
	"property",
	"redefines",
	"sign",
	"signed-int",
	"signed-long",
	"signed-short",
	"signed",
	"unsigned",
	"value",
	"values",
	"when",
	"zero",
	"zeroes",
	"zeros",
	
];

const cobolRegisters: string[] = [
	"address-of",
	"bigint1",
	"bigint2",
	"blob-file",
	"blob-locator",
	"blob",
	"clob-file",
	"clob-locator",
	"clob",
	"dbclob-file",
	"dbclob-locator",
	"dbclob",
	"debug-item",
	"jnienvptr",
	"json-code",
	"json-status",
	"long-varbinary",
	"long-varchar",
	"longint1",
	"longint2",
	"longint3",
	"longint4",
	"longint5",
	"longint6",
	"return-code",
	"rowid",
	"shortint1",
	"shortint2",
	"shortint3",
	"shortint4",
	"shortint5",
	"shortint6",
	"shortint7",
	"sort-control",
	"sort-core-size",
	"sort-file-size",
	"sort-message",
	"sort-mode-size",
	"sort-return",
	"tally",
	"time-record",
	"timestamp-offset-record",
	"timestamp-offset",
	"timestamp-record",
	"timestamp",
	"varbinary",
	"when-compiled",
	"xml-code",
	"xml-code",
	"xml-event",
	"xml-information",
	"xml-namespace-prefix",
	"xml-namespace",
	"xml-nnamespace-prefix",
	"xml-nnamespace",
	"xml-ntext",
	"xml-text"
];

const cobolProcedureKeywords: string[] = [
	"accept",
	"add",
	"address",
	"advancing",
	"after",
	"all",
	"also",
	"alter",
	"alternate",
	"and",
	"apply",
	"at",
	"call",
	"cancel",
	"chain",
	"close",
	"compute",
	"controls",
	"count",
	"declare",
	"delete",
	"delimited",
	"delimiter",
	"depending",
	"detail",
	"display",
	"divide",
	"eject",
	"else",
	"end-add",
	"end-call",
	"end-chain",
	"end-compute",
	"end-delete",
	"end-display",
	"end-divide",
	"end-evaluate",
	"end-exec",
	"end-if",
	"end-invoke",
	"end-multiply",
	"end-of-page",
	"end-perform",
	"end-read",
	"end-receive",
	"end-return",
	"end-rewrite",
	"end-search",
	"end-start",
	"end-string",
	"end-subtract",
	"end-unstring",
	"end-write",
	"end",
	"entry",
	"equal",
	"error",
	"evaluate",
	"every",
	"exec",
	"exit",
	"external",
	"false",
	"function",
	"giving",
	"go",
	"goback",
	"greater",
	"high-value",
	"high-values",
	"if",
	"initialize",
	"initiate",
	"insert",
	"inspect",
	"into",
	"invoke",
	"method-id",
	"method",
	"move",
	"multiple",
	"multiply",
	"object-computer",
	"object",
	"perform",
	"release",
	"replace",
	"replacing",
	"return-code",
	"returning",
	"rewind",
	"rewrite",
	"search",
	"section",
	"self",
	"sentence",
	"set",
	"space",
	"spaces",
	"stop",
	"string",
	"subtract",
	"sum",
	"super",
	"tally",
	"tallying",
	"than",
	"then",
	"through",
	"thru",
	"time",
	"times",
	"unit",
	"unstring",
	"until",
	"varying",
	"write"
];

const cobolCOBOLITKeywords: string[] = [
	"abend",
	"accept",
	"access",
	"add",
	"address",
	"advancing",
	"after",
	"all",
	"allocate",
	"alphabet",
	"alphabetic",
	"alphabetic-lower",
	"alphabetic-upper",
	"alphanumeric",
	"alphanumeric-edited",
	"also",
	"alter",
	"alternate",
	"and",
	"any",
	"apply",
	"are",
	"area",
	"areas",
	"argument-number",
	"argument-value",
	"as",
	"ascending",
	"assign",
	"at",
	"auto",
	"auto-skip",
	"automatic",
	"autoterminate",
	"b-and",
	"b-exor",
	"b-not",
	"b-or",
	"b-xor",
	"background-color",
	"background-colour",
	"based",
	"beep",
	"before",
	"bell",
	"binary",
	"binary-c-long",
	"binary-char",
	"binary-double",
	"binary-long",
	"binary-short",
	"bit",
	"blank",
	"blink",
	"block",
	"bottom",
	"by",
	"byte-length",
	"call",
	"cancel",
	"cdecl",
	"century-date",
	"century-day",
	"chain",
	"chaining",
	"changed",
	"character",
	"characters",
	"checkpoint",
	"class",
	"close",
	"code",
	"code-set",
	"col",
	"collating",
	"cols",
	"column",
	"columns",
	"comma",
	"command-line",
	"commit",
	"common",
	"comp",
	"comp-1",
	"comp-2",
	"comp-3",
	"comp-4",
	"comp-5",
	"comp-6",
	"comp-x",
	"computational",
	"computational-1",
	"computational-2",
	"computational-3",
	"computational-4",
	"computational-5",
	"computational-x",
	"compute",
	"configuration",
	"constant",
	"contains",
	"content",
	"continue",
	"control",
	"controls",
	"convert",
	"converting",
	"copy",
	"core-index",
	"corr",
	"corresponding",
	"count",
	"crt",
	"currency",
	"cursor",
	"cycle",
	"data",
	"date",
	"day",
	"day-of-week",
	"de",
	"debugging",
	"decimal-point",
	"declaratives",
	"default",
	"delete",
	"delimited",
	"delimiter",
	"depending",
	"descending",
	"descriptor",
	"detail",
	"dir-separator",
	"disk",
	"display",
	"display-1",
	"divide",
	"division",
	"down",
	"duplicates",
	"dynamic",
	"ebcdic",
	"echo",
	"else",
	"empty-check",
	"encoding",
	"end",
	"end-accept",
	"end-add",
	"end-call",
	"end-compute",
	"end-delete",
	"end-display",
	"end-divide",
	"end-evaluate",
	"end-exhibit",
	"end-if",
	"end-multiply",
	"end-of-page",
	"end-perform",
	"end-read",
	"end-return",
	"end-rewrite",
	"end-search",
	"end-start",
	"end-string",
	"end-subtract",
	"end-unstring",
	"end-write",
	"end-xml",
	"entry",
	"environment",
	"environment-name",
	"environment-value",
	"eol",
	"eop",
	"eos",
	"equal",
	"equals",
	"erase",
	"error",
	"escape",
	"evaluate",
	"exception",
	"exclusive",
	"exhibit",
	"exit",
	"extend",
	"external",
	"failure",
	"false",
	"fd",
	"file",
	"file-control",
	"file-id",
	"filler",
	"final",
	"first",
	"float-long",
	"float-short",
	"footing",
	"for",
	"foreground-color",
	"foreground-colour",
	"forever",
	"free",
	"from",
	"full",
	"function",
	"function-id",
	"generate",
	"giving",
	"global",
	"go",
	"goback",
	"greater",
	"group",
	"group-usage",
	"heading",
	"high",
	"high-value",
	"high-values",
	"highlight",
	"i-o",
	"i-o-control",
	"id",
	"identification",
	"if",
	"ignore",
	"ignoring",
	"in",
	"index",
	"indexed",
	"indicate",
	"initial",
	"initialise",
	"initialised",
	"initialize",
	"initialized",
	"initiate",
	"input",
	"input-output",
	"inspect",
	"into",
	"intrinsic",
	"invalid",
	"is",
	"just",
	"justified",
	"kept",
	"key",
	"label",
	"last",
	"leading",
	"left",
	"length",
	"length-an",
	"length-check",
	"less",
	"like",
	"limit",
	"limits",
	"linage",
	"linage-counter",
	"line",
	"lines",
	"linkage",
	"local-storage",
	"locale",
	"lock",
	"low",
	"low-value",
	"low-values",
	"lowlight",
	"manual",
	"memory",
	"merge",
	"minus",
	"mode",
	"move",
	"multiple",
	"multiply",
	"named",
	"national",
	"national-edited",
	"native",
	"negative",
	"next",
	"no",
	"no-echo",
	"not",
	"null",
	"nulls",
	"number",
	"numbers",
	"numeric",
	"numeric-edited",
	"object-computer",
	"occurs",
	"of",
	"off",
	"omitted",
	"on",
	"only",
	"open",
	"optional",
	"or",
	"order",
	"organisation",
	"organization",
	"other",
	"output",
	"overflow",
	"overline",
	"packed-decimal",
	"padding",
	"page",
	"paragraph",
	"parse",
	"perform",
	"pic",
	"picture",
	"plus",
	"pointer",
	"position",
	"positive",
	"present",
	"previous",
	"printer",
	"printing",
	"procedure",
	"procedure-pointer",
	"procedures",
	"proceed",
	"processing",
	"program",
	"program-id",
	"program-pointer",
	"prompt",
	"quote",
	"quotes",
	"random",
	"rd",
	"read",
	"ready",
	"record",
	"record-overflow",
	"recording",
	"records",
	"recursive",
	"redefines",
	"reel",
	"reference",
	"relative",
	"release",
	"remainder",
	"removal",
	"renames",
	"reorg-criteria",
	"replacing",
	"report",
	"reporting",
	"reports",
	"repository",
	"required",
	"reserve",
	"reset",
	"return",
	"returning",
	"reverse",
	"reversed",
	"reverse-video",
	"rewind",
	"rewrite",
	"right",
	"rollback",
	"rounded",
	"run",
	"same",
	"screen",
	"scroll",
	"sd",
	"search",
	"section",
	"secure",
	"segment-limit",
	"select",
	"sentence",
	"separate",
	"sequence",
	"sequential",
	"set",
	"sharing",
	"sign",
	"signed",
	"signed-int",
	"signed-long",
	"signed-short",
	"size",
	"sort",
	"sort-merge",
	"source",
	"source-computer",
	"space",
	"spaces",
	"special-names",
	"standard",
	"standard-1",
	"standard-2",
	"start",
	"static",
	"status",
	"stdcall",
	"stop",
	"string",
	"subtract",
	"success",
	"sum",
	"suppress",
	"symbolic",
	"sync",
	"synchronized",
	"tab",
	"tallying",
	"tape",
	"terminate",
	"test",
	"than",
	"then",
	"through",
	"thru",
	"time",
	"timeout",
	"times",
	"to",
	"top",
	"trailing",
	"trace",
	"transform",
	"true",
	"type",
	"typedef",
	"underline",
	"unit",
	"unlock",
	"unsigned",
	"unsigned-int",
	"unsigned-long",
	"unsigned-short",
	"unstring",
	"until",
	"up",
	"update",
	"upon",
	"usage",
	"use",
	"using",
	"value",
	"values",
	"varying",
	"wait",
	"when",
	"with",
	"words",
	"working-storage",
	"write",
	"write-only",
	"xml",
	"yyyyddd",
	"yyyymmdd",
	"zero",
	"zeroes",
	"zeros"
];

const cobolKeywordDictionaryMap = new Map<string, string>();
const acucobolKeywordDictionaryMap = new Map<string, string>();
const cobolitKeywordDictionaryMap = new Map<string, string>();

export const cobolProcedureKeywordDictionary = new Map<string, string>();
export const cobolStorageKeywordDictionary = new Map<string, string>();
export const cobolRegistersDictionary = new Map<string, string>();

const cobolList: string[] = [];
const acucobolList: string[] = [];

/* inline decl */
for (const key of cobolKeywords) {
	cobolKeywordDictionaryMap.set(key, key);
	acucobolKeywordDictionaryMap.set(key, key);
	cobolList.push(key);
	acucobolList.push(key);
}

for (const key of acuKeywords) {
	if (!acucobolKeywordDictionaryMap.has(key)) {
		acucobolKeywordDictionaryMap.set(key, key);
		acucobolList.push(key);
	}
}

for (const key of cobolProcedureKeywords) {
	if (!cobolProcedureKeywordDictionary.has(key)) {
		cobolProcedureKeywordDictionary.set(key, key);
		if (!cobolKeywordDictionaryMap.has(key)) {
			cobolList.push(key);
		}
		if (!acucobolKeywordDictionaryMap.has(key)) {
			acucobolList.push(key);
		}
	}
}

for (const key of cobolStorageKeywords) {
	if (!cobolStorageKeywordDictionary.has(key)) {
		cobolStorageKeywordDictionary.set(key, key);
		if (!cobolKeywordDictionaryMap.has(key)) {
			cobolList.push(key);
		}
		if (!acucobolKeywordDictionaryMap.has(key)) {
			acucobolList.push(key);
		}
	}
}

for (const key of cobolRegisters) {
	if (!cobolRegistersDictionary.has(key)) {
		cobolRegistersDictionary.set(key, key);
		if (!cobolKeywordDictionaryMap.has(key)) {
			cobolList.push(key);
		}
		if (!acucobolKeywordDictionaryMap.has(key)) {
			acucobolList.push(key);
		}
	}
}

for (const key of cobolCOBOLITKeywords) {
	if (!cobolitKeywordDictionaryMap.has(key)) {
		cobolitKeywordDictionaryMap.set(key,key);
	}
}

export function getCOBOLKeywordDictionary(dialect: string): Map<string, string> {
	switch(dialect) {
		case "ACUCOBOL" : return acucobolKeywordDictionaryMap;
		case "COBOLIT"  : return cobolitKeywordDictionaryMap;
		default : return cobolKeywordDictionaryMap;
	}
}

export function getCOBOLKeywordList(dialect: string): string[] {
	switch(dialect) {
		case "ACUCOBOL" : return acucobolList;
		case "COBOLIT" : return cobolCOBOLITKeywords;
		default : return cobolList;
	}
}