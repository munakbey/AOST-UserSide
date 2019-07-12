<?php

// Start of zlib v.7.0.4-7ubuntu2

/**
 * (PHP 4, PHP 5, PHP 7)<br/>
 * Output a gz-file
 * @link http://php.net/manual/en/function.readgzfile.php
 * @param string $filename <p>
 * The file name. This file will be opened from the filesystem and its
 * contents written to standard output.
 * </p>
 * @param int $use_include_path [optional] <p>
 * You can set this optional parameter to 1, if you
 * want to search for the file in the include_path too.
 * </p>
 * @return int the number of (uncompressed) bytes read from the file. If
 * an error occurs, <b>FALSE</b> is returned and unless the function was
 * called as @readgzfile, an error message is
 * printed.
 */
function readgzfile(string $filename, int $use_include_path = 0): int {}

/**
 * (PHP 4, PHP 5, PHP 7)<br/>
 * Rewind the position of a gz-file pointer
 * @link http://php.net/manual/en/function.gzrewind.php
 * @param resource $zp <p>
 * The gz-file pointer. It must be valid, and must point to a file
 * successfully opened by <b>gzopen</b>.
 * </p>
 * @return bool <b>TRUE</b> on success or <b>FALSE</b> on failure.
 */
function gzrewind($zp): bool {}

/**
 * (PHP 4, PHP 5, PHP 7)<br/>
 * Close an open gz-file pointer
 * @link http://php.net/manual/en/function.gzclose.php
 * @param resource $zp <p>
 * The gz-file pointer. It must be valid, and must point to a file
 * successfully opened by <b>gzopen</b>.
 * </p>
 * @return bool <b>TRUE</b> on success or <b>FALSE</b> on failure.
 */
function gzclose($zp): bool {}

/**
 * (PHP 4, PHP 5, PHP 7)<br/>
 * Test for EOF on a gz-file pointer
 * @link http://php.net/manual/en/function.gzeof.php
 * @param resource $zp <p>
 * The gz-file pointer. It must be valid, and must point to a file
 * successfully opened by <b>gzopen</b>.
 * </p>
 * @return int <b>TRUE</b> if the gz-file pointer is at EOF or an error occurs;
 * otherwise returns <b>FALSE</b>.
 */
function gzeof($zp): int {}

/**
 * (PHP 4, PHP 5, PHP 7)<br/>
 * Get character from gz-file pointer
 * @link http://php.net/manual/en/function.gzgetc.php
 * @param resource $zp <p>
 * The gz-file pointer. It must be valid, and must point to a file
 * successfully opened by <b>gzopen</b>.
 * </p>
 * @return string The uncompressed character or <b>FALSE</b> on EOF (unlike <b>gzeof</b>).
 */
function gzgetc($zp): string {}

/**
 * (PHP 4, PHP 5, PHP 7)<br/>
 * Get line from file pointer
 * @link http://php.net/manual/en/function.gzgets.php
 * @param resource $zp <p>
 * The gz-file pointer. It must be valid, and must point to a file
 * successfully opened by <b>gzopen</b>.
 * </p>
 * @param int $length [optional] <p>
 * The length of data to get.
 * </p>
 * @return string The uncompressed string, or <b>FALSE</b> on error.
 */
function gzgets($zp, int $length = null): string {}

/**
 * (PHP 4, PHP 5, PHP 7)<br/>
 * Get line from gz-file pointer and strip HTML tags
 * @link http://php.net/manual/en/function.gzgetss.php
 * @param resource $zp <p>
 * The gz-file pointer. It must be valid, and must point to a file
 * successfully opened by <b>gzopen</b>.
 * </p>
 * @param int $length <p>
 * The length of data to get.
 * </p>
 * @param string $allowable_tags [optional] <p>
 * You can use this optional parameter to specify tags which should not
 * be stripped.
 * </p>
 * @return string The uncompressed and stripped string, or <b>FALSE</b> on error.
 */
function gzgetss($zp, int $length, string $allowable_tags = null): string {}

/**
 * (PHP 4, PHP 5, PHP 7)<br/>
 * Binary-safe gz-file read
 * @link http://php.net/manual/en/function.gzread.php
 * @param resource $zp <p>
 * The gz-file pointer. It must be valid, and must point to a file
 * successfully opened by <b>gzopen</b>.
 * </p>
 * @param int $length <p>
 * The number of bytes to read.
 * </p>
 * @return string The data that have been read.
 */
function gzread($zp, int $length): string {}

/**
 * (PHP 4, PHP 5, PHP 7)<br/>
 * Open gz-file
 * @link http://php.net/manual/en/function.gzopen.php
 * @param string $filename <p>
 * The file name.
 * </p>
 * @param string $mode <p>
 * As in <b>fopen</b> (rb or
 * wb) but can also include a compression level
 * (wb9) or a strategy: f for
 * filtered data as in wb6f, h for
 * Huffman only compression as in wb1h.
 * (See the description of deflateInit2
 * in zlib.h for
 * more information about the strategy parameter.)
 * </p>
 * @param int $use_include_path [optional] <p>
 * You can set this optional parameter to 1, if you
 * want to search for the file in the include_path too.
 * </p>
 * @return resource a file pointer to the file opened, after that, everything you read
 * from this file descriptor will be transparently decompressed and what you
 * write gets compressed.
 * </p>
 * <p>
 * If the open fails, the function returns <b>FALSE</b>.
 */
function gzopen(string $filename, string $mode, int $use_include_path = 0) {}

/**
 * (PHP 4, PHP 5, PHP 7)<br/>
 * Output all remaining data on a gz-file pointer
 * @link http://php.net/manual/en/function.gzpassthru.php
 * @param resource $zp <p>
 * The gz-file pointer. It must be valid, and must point to a file
 * successfully opened by <b>gzopen</b>.
 * </p>
 * @return int The number of uncompressed characters read from <i>gz</i>
 * and passed through to the input, or <b>FALSE</b> on error.
 */
function gzpassthru($zp): int {}

/**
 * (PHP 4, PHP 5, PHP 7)<br/>
 * Seek on a gz-file pointer
 * @link http://php.net/manual/en/function.gzseek.php
 * @param resource $zp <p>
 * The gz-file pointer. It must be valid, and must point to a file
 * successfully opened by <b>gzopen</b>.
 * </p>
 * @param int $offset <p>
 * The seeked offset.
 * </p>
 * @param int $whence [optional] <p>
 * <i>whence</i> values are:
 * <b>SEEK_SET</b> - Set position equal to <i>offset</i> bytes.
 * <b>SEEK_CUR</b> - Set position to current location plus <i>offset</i>.
 * </p>
 * <p>
 * If <i>whence</i> is not specified, it is assumed to be
 * <b>SEEK_SET</b>.
 * </p>
 * @return int Upon success, returns 0; otherwise, returns -1. Note that seeking
 * past EOF is not considered an error.
 */
function gzseek($zp, int $offset, int $whence = SEEK_SET): int {}

/**
 * (PHP 4, PHP 5, PHP 7)<br/>
 * Tell gz-file pointer read/write position
 * @link http://php.net/manual/en/function.gztell.php
 * @param resource $zp <p>
 * The gz-file pointer. It must be valid, and must point to a file
 * successfully opened by <b>gzopen</b>.
 * </p>
 * @return int The position of the file pointer or <b>FALSE</b> if an error occurs.
 */
function gztell($zp): int {}

/**
 * (PHP 4, PHP 5, PHP 7)<br/>
 * Binary-safe gz-file write
 * @link http://php.net/manual/en/function.gzwrite.php
 * @param resource $zp <p>
 * The gz-file pointer. It must be valid, and must point to a file
 * successfully opened by <b>gzopen</b>.
 * </p>
 * @param string $string <p>
 * The string to write.
 * </p>
 * @param int $length [optional] <p>
 * The number of uncompressed bytes to write. If supplied, writing will
 * stop after <i>length</i> (uncompressed) bytes have been
 * written or the end of <i>string</i> is reached,
 * whichever comes first.
 * </p>
 * <p>
 * Note that if the <i>length</i> argument is given,
 * then the magic_quotes_runtime
 * configuration option will be ignored and no slashes will be
 * stripped from <i>string</i>.
 * </p>
 * @return int the number of (uncompressed) bytes written to the given gz-file
 * stream.
 */
function gzwrite($zp, string $string, int $length = null): int {}

/**
 * (PHP 4, PHP 5, PHP 7)<br/>
 * Alias of <b>gzwrite</b>
 * @link http://php.net/manual/en/function.gzputs.php
 * @param $fp
 * @param $str
 * @param $length [optional]
 */
function gzputs($fp, $str, $length) {}

/**
 * (PHP 4, PHP 5, PHP 7)<br/>
 * Read entire gz-file into an array
 * @link http://php.net/manual/en/function.gzfile.php
 * @param string $filename <p>
 * The file name.
 * </p>
 * @param int $use_include_path [optional] <p>
 * You can set this optional parameter to 1, if you
 * want to search for the file in the include_path too.
 * </p>
 * @return array An array containing the file, one line per cell, empty lines included, and with newlines still attached.
 */
function gzfile(string $filename, int $use_include_path = 0): array {}

/**
 * (PHP 4 &gt;= 4.0.1, PHP 5, PHP 7)<br/>
 * Compress a string
 * @link http://php.net/manual/en/function.gzcompress.php
 * @param string $data <p>
 * The data to compress.
 * </p>
 * @param int $level [optional] <p>
 * The level of compression. Can be given as 0 for no compression up to 9
 * for maximum compression.
 * </p>
 * <p>
 * If -1 is used, the default compression of the zlib library is used which is 6.
 * </p>
 * @param int $encoding [optional] <p>
 * One of <b>ZLIB_ENCODING_*</b> constants.
 * </p>
 * @return string The compressed string or <b>FALSE</b> if an error occurred.
 */
function gzcompress(string $data, int $level = -1, int $encoding = ZLIB_ENCODING_DEFLATE): string {}

/**
 * (PHP 4 &gt;= 4.0.1, PHP 5, PHP 7)<br/>
 * Uncompress a compressed string
 * @link http://php.net/manual/en/function.gzuncompress.php
 * @param string $data <p>
 * The data compressed by <b>gzcompress</b>.
 * </p>
 * @param int $length [optional] <p>
 * The maximum length of data to decode.
 * </p>
 * @return string The original uncompressed data or <b>FALSE</b> on error.
 * </p>
 * <p>
 * The function will return an error if the uncompressed data is more than
 * 32768 times the length of the compressed input <i>data</i>
 * or more than the optional parameter <i>length</i>.
 */
function gzuncompress(string $data, int $length = 0): string {}

/**
 * (PHP 4 &gt;= 4.0.4, PHP 5, PHP 7)<br/>
 * Deflate a string
 * @link http://php.net/manual/en/function.gzdeflate.php
 * @param string $data <p>
 * The data to deflate.
 * </p>
 * @param int $level [optional] <p>
 * The level of compression. Can be given as 0 for no compression up to 9
 * for maximum compression. If not given, the default compression level will
 * be the default compression level of the zlib library.
 * </p>
 * @param int $encoding [optional] <p>
 * One of <b>ZLIB_ENCODING_*</b> constants.
 * </p>
 * @return string The deflated string or <b>FALSE</b> if an error occurred.
 */
function gzdeflate(string $data, int $level = -1, int $encoding = ZLIB_ENCODING_RAW): string {}

/**
 * (PHP 4 &gt;= 4.0.4, PHP 5, PHP 7)<br/>
 * Inflate a deflated string
 * @link http://php.net/manual/en/function.gzinflate.php
 * @param string $data <p>
 * The data compressed by <b>gzdeflate</b>.
 * </p>
 * @param int $length [optional] <p>
 * The maximum length of data to decode.
 * </p>
 * @return string The original uncompressed data or <b>FALSE</b> on error.
 * </p>
 * <p>
 * The function will return an error if the uncompressed data is more than
 * 32768 times the length of the compressed input <i>data</i>
 * or more than the optional parameter <i>length</i>.
 */
function gzinflate(string $data, int $length = 0): string {}

/**
 * (PHP 4 &gt;= 4.0.4, PHP 5, PHP 7)<br/>
 * Create a gzip compressed string
 * @link http://php.net/manual/en/function.gzencode.php
 * @param string $data <p>
 * The data to encode.
 * </p>
 * @param int $level [optional] <p>
 * The level of compression. Can be given as 0 for no compression up to 9
 * for maximum compression. If not given, the default compression level will
 * be the default compression level of the zlib library.
 * </p>
 * @param int $encoding_mode [optional] <p>
 * The encoding mode. Can be <b>FORCE_GZIP</b> (the default)
 * or <b>FORCE_DEFLATE</b>.
 * </p>
 * <p>
 * Prior to PHP 5.4.0, using <b>FORCE_DEFLATE</b> results in
 * a standard zlib deflated string (inclusive zlib headers) after a gzip
 * file header but without the trailing crc32 checksum.
 * </p>
 * <p>
 * In PHP 5.4.0 and later, <b>FORCE_DEFLATE</b> generates
 * RFC 1950 compliant output, consisting of a zlib header, the deflated
 * data, and an Adler checksum.
 * </p>
 * @return string The encoded string, or <b>FALSE</b> if an error occurred.
 */
function gzencode(string $data, int $level = -1, int $encoding_mode = FORCE_GZIP): string {}

/**
 * (PHP 5 &gt;= 5.4.0, PHP 7)<br/>
 * Decodes a gzip compressed string
 * @link http://php.net/manual/en/function.gzdecode.php
 * @param string $data <p>
 * The data to decode, encoded by <b>gzencode</b>.
 * </p>
 * @param int $length [optional] <p>
 * The maximum length of data to decode.
 * </p>
 * @return string The decoded string, or <b>FALSE</b> if an error occurred.
 */
function gzdecode(string $data, int $length = null): string {}

/**
 * (PHP 5 &gt;= 5.4.0, PHP 7)<br/>
 * Compress data with the specified encoding
 * @link http://php.net/manual/en/function.zlib-encode.php
 * @param string $data <p>
 * </p>
 * @param string $encoding <p>
 * </p>
 * @param string $level [optional] <p>
 * </p>
 * @return string
 */
function zlib_encode(string $data, string $encoding, string $level = '-1'): string {}

/**
 * (PHP 5 &gt;= 5.4.0, PHP 7)<br/>
 * Uncompress any raw/gzip/zlib encoded data
 * @link http://php.net/manual/en/function.zlib-decode.php
 * @param string $data <p>
 * </p>
 * @param string $max_decoded_len [optional] <p>
 * </p>
 * @return string
 */
function zlib_decode(string $data, string $max_decoded_len = null): string {}

/**
 * (PHP 4 &gt;= 4.3.2, PHP 5, PHP 7)<br/>
 * Returns the coding type used for output compression
 * @link http://php.net/manual/en/function.zlib-get-coding-type.php
 * @return string Possible return values are gzip, deflate,
 * or <b>FALSE</b>.
 */
function zlib_get_coding_type(): string {}

/**
 * @param $encoding
 * @param $level [optional]
 */
function deflate_init($encoding, $level) {}

/**
 * @param $resource
 * @param $add
 * @param $flush_behavior [optional]
 */
function deflate_add($resource, $add, $flush_behavior) {}

/**
 * @param $encoding
 */
function inflate_init($encoding) {}

/**
 * @param $resource
 * @param $flush_behavior
 */
function inflate_add($resource, $flush_behavior) {}

/**
 * (PHP 4 &gt;= 4.0.4, PHP 5, PHP 7)<br/>
 * ob_start callback function to gzip output buffer
 * @link http://php.net/manual/en/function.ob-gzhandler.php
 * @param string $buffer
 * @param int $mode
 * @return string
 */
function ob_gzhandler(string $buffer, int $mode): string {}

define ('FORCE_GZIP', 31);
define ('FORCE_DEFLATE', 15);
define ('ZLIB_ENCODING_RAW', -15);
define ('ZLIB_ENCODING_GZIP', 31);
define ('ZLIB_ENCODING_DEFLATE', 15);
define ('ZLIB_NO_FLUSH', 0);
define ('ZLIB_PARTIAL_FLUSH', 1);
define ('ZLIB_SYNC_FLUSH', 2);
define ('ZLIB_FULL_FLUSH', 3);
define ('ZLIB_BLOCK', 5);
define ('ZLIB_FINISH', 4);
define ('ZLIB_FILTERED', 1);
define ('ZLIB_HUFFMAN_ONLY', 2);
define ('ZLIB_RLE', 3);
define ('ZLIB_FIXED', 4);
define ('ZLIB_DEFAULT_STRATEGY', 0);
define ('ZLIB_VERSION', "1.2.8");
define ('ZLIB_VERNUM', 4736);

// End of zlib v.7.0.4-7ubuntu2
?>
