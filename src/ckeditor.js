/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import Mention from "@ckeditor/ckeditor5-mention/src/mention";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";

export default class Editor extends ClassicEditorBase {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Autoformat,
	CKFinder,
	PasteFromOffice,
	Mention,
	Essentials,
	Paragraph,

	FontSize,
	FontFamily,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	FontColor,
	Alignment,
	List,
	Indent,
	Heading,
	Link,
	BlockQuote,
	Image,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Base64UploadAdapter,
	Table,
	TableToolbar,
	TableProperties,
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		alignment: {
			options: ['left','right','center','justify']
		},
		fontSize: {
			options: ['tiny','default','big']
		},
		items: [
			'fontFamily',
			'fontSize',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'fontColor',
			'|',
			'alignment',
			'bulletedList',
			'numberedList',
			'indent',
			'outdent',
			'|',
			'heading',
			'|',
			'link',
			'blockQuote',
			'imageUpload',
			'insertTable',
		]
	},
	image: {
		toolbar: [
			'imageStyle:alignLeft',
			'imageStyle:alignCenter',
			'imageStyle:alignRight',
		],
		styles: [
			'alignLeft',
			'alignCenter',
			'alignRight'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableProperties',
		],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
